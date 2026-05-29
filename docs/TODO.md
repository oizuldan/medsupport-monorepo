# TODO: Decommission the Express server

Work through this checklist **in order**.
**Phase 1** (local PC) must pass before you touch the VPS.

---

## Overview

```
Phase 1 – Local PC test    →   confirm the web app works without the server
Phase 2 – Security         →   rotate the leaked Strapi password
Phase 3 – VPS deployment   →   apply the changes to production
Phase 4 – Cleanup          →   (optional) delete dead code
```

---

# ─── PHASE 1 · LOCAL PC TEST ────────────────────────────────────────────────

## Step 1 – Pull the latest code onto your PC

> **You do NOT need to merge the PR before running the local test.**
> Phase 1 runs on whatever branch is currently checked out.
> The merge into `main` is only required before the VPS deployment (Phase 3 / Step 8).

```bash
# In your local clone — pull whichever branch contains these changes:
git pull origin copilot/analyze-performance-issues   # or: git pull origin main after merge

# Install / refresh dependencies (only needed if you haven't done it recently)
yarn install
```

> **Prerequisite:** Node.js ≥ 14 and Yarn must be installed on your PC.
> Check with: `node --version` and `yarn --version`

---

## Step 2 – Make sure Strapi (CMS) is reachable

> ⚠️  **If your VPS is currently down, read this section carefully.**
>
> The local web app fetches ALL its content from Strapi via GraphQL
> (`CMS_GRAPHQL_API_URL` in `.env.development`).  If Strapi is unreachable,
> every page will be empty or show an error — even though the web app itself
> starts fine.  You do **not** need to restart nginx or the Next.js web process
> on the VPS; you only need the CMS (Strapi) running.

### 2a – Check whether Strapi is already up

Open this URL in your browser:

```
https://medsupport.kz/cms/graphql
```

- If you see a GraphQL Playground / JSON response → Strapi is up, skip to Step 2c.
- If you get a connection error or timeout → the VPS needs to be started (Step 2b).

### 2b – Start the VPS and bring up only the CMS process

1. **Log into your VPS provider dashboard** (Hetzner / DigitalOcean / etc.)
   and start / power-on the server if it is stopped.
2. Wait ~1 minute for the OS to boot, then SSH in:

```bash
ssh your-username@medsupport.kz
```

3. Start **only the CMS** (skip `web` and do NOT start `server`):

```bash
# If PM2 already has a saved process list (most likely):
pm2 resurrect               # restores whatever was saved last time

# OR start fresh with the updated ecosystem config:
pm2 start ecosystem.config.js --only cms --env production
pm2 save
```

4. Verify it started:

```bash
pm2 list
# You should see 'cms' with status 'online' on port 1337
```

5. Tail the CMS log to confirm it is ready before moving on:

```bash
pm2 logs cms --lines 20
# Wait until you see "Your application is ready at http://0.0.0.0:1337"
```

> **Why not start `web` on the VPS too?**  We deliberately leave it off so
> that the VPS web process does not compete for RAM.  Your local Next.js is
> the one we are testing.  You can bring the VPS `web` process back up later
> in Phase 3 (Step 8).

### 2c – Verify your local env file

The file `apps/web/.env.development` already exists and points at the
production Strapi:

```
CMS_GRAPHQL_API_URL="https://medsupport.kz/cms/graphql"
BASE_URL="https://medsupport.kz/cms"
```

No changes needed.  If the file is missing, create it with those two lines.

---

## Step 3 – Start ONLY the web app (do NOT start apps/server)

Open **one** terminal and run:

```bash
yarn workspace @medsupportkz/web web:start
```

Wait until you see:

```
> Ready on http://localhost:3000
```

> **Important:** do NOT run `yarn workspace @medsupportkz/server server:start`
> or any equivalent.  The whole point of this test is to confirm the web app
> works **without** the Express server.

---

## Step 4 – Verify all live pages in your browser

Open each URL and confirm the page loads with real content:

| URL | What you should see |
|-----|---------------------|
| `http://localhost:3000` | Home page with banner and content ✅ |
| `http://localhost:3000/articles` | List of articles ✅ |
| `http://localhost:3000/article/1` | A single article (use any id from the /articles list) ✅ |
| `http://localhost:3000/vxn` | Vaccine page ✅ |
| `http://localhost:3000/questions` | Questions list ✅ |
| `http://localhost:3000/resistance` | Resistance page ✅ |
| `http://localhost:3000/about` | About Us page ✅ |

If all 7 pages load correctly → **Phase 1 complete. Proceed to Phase 2.**

If any page shows an error, check the terminal output and open a new issue.

---

# ─── PHASE 2 · SECURITY ─────────────────────────────────────────────────────

## Step 5 – Rotate the leaked Strapi admin password 🔴

A Strapi admin username and plaintext password were committed in the git
history of `apps/server/src/services/DocumentService.ts`.  Anyone who can read
the repository history has those credentials.

**Do this NOW — it is independent of all other steps.**

1. Log in to the Strapi admin panel at `https://medsupport.kz/cms/admin`
2. Go to **Settings → Administration Panel → Users**
3. Click on the admin account and change the password to something strong
4. (Optional) Go to **Settings → API Tokens** and rotate any tokens you see

---

# ─── PHASE 3 · VPS DEPLOYMENT ───────────────────────────────────────────────

> Only proceed here after Phase 1 (local test) passes.

> ⚠️  **Merge the PR before touching the VPS.**
>
> The VPS pulls from `main` (or your default branch).  If the PR is still open,
> `git pull origin main` on the VPS will **not** include these changes.
>
> **Correct order:**
> 1. GitHub: open the PR and click **Merge pull request** → confirm merge into `main`
> 2. VPS: `git pull origin main` (Step 8 below)
> 3. VPS: `pm2 reload ecosystem.config.js --env production` (Step 8 below)
>
> You do NOT need to push the branch manually — the merge takes care of that.

## Step 6 – Stop the Express server on the VPS

SSH into the VPS and run:

```bash
# If you are using PM2:
pm2 delete server          # remove from PM2 process list
pm2 save                   # persist the change across reboots

# Verify it is gone
pm2 list                   # should show only 'web' and 'cms'
```

If the server is currently started with `forever` or `node` directly:

```bash
# Find and kill the process on port 8000
fuser -k 8000/tcp

# Verify port 8000 is free
ss -tlnp | grep 8000       # should return nothing
```

---

## Step 7 – Deploy the updated nginx config

The `/api/`, `/auth/`, and `/socket.io/` proxy blocks have been removed from
`nginx/nginx.conf`.  Without them, requests to those paths return a clean
Next.js 404 instead of a 502 Bad Gateway.

```bash
# From your local machine — replace 'your-username' with your SSH user
# (e.g. ubuntu, root, deploy)
scp nginx/nginx.conf your-username@medsupport.kz:/etc/nginx/sites-available/medsupport

# On the VPS: test and reload
sudo nginx -t                          # must print "syntax is ok"
sudo systemctl reload nginx
```

---

## Step 8 – Deploy the updated ecosystem.config.js

The `server` entry has been removed from `ecosystem.config.js`.
`web` and `cms` now each get a 600 MB Node.js heap (was 512 MB) with a PM2
restart threshold of 700 MB.

```bash
# On the VPS: pull the latest code (PR must already be merged into main)
git pull origin main

# Reload PM2 with the new config (zero-downtime reload)
pm2 reload ecosystem.config.js --env production
pm2 save
```

---

## Step 9 – Verify the live website

Check these URLs in your browser after the deploy:

| URL | Expected result |
|-----|-----------------|
| `https://medsupport.kz` | Home page loads ✅ |
| `https://medsupport.kz/articles` | Articles page loads ✅ |
| `https://medsupport.kz/vxn` | Vaccine page loads ✅ |
| `https://medsupport.kz/questions` | Questions page loads ✅ |
| `https://medsupport.kz/resistance` | Resistance page loads ✅ |
| `https://medsupport.kz/about` | About Us page loads ✅ |
| `https://medsupport.kz/cms/admin` | Strapi admin panel loads ✅ |
| `https://medsupport.kz/api/anything` | Next.js 404 page (NOT 502) ✅ |

---

## Step 10 – Confirm reduced memory usage

```bash
# On the VPS
pm2 list
```

Expected: `web` + `cms` together use ≈ 400–600 MB at idle, leaving > 1 GB free.

```bash
# For live monitoring:
pm2 monit
```

---

# ─── PHASE 4 · CLEANUP (OPTIONAL) ──────────────────────────────────────────

## Step 11 – Decide the long-term fate of apps/server

See [`docs/server-analysis.md`](server-analysis.md) for the full breakdown.

| Option | What to do |
|--------|-----------|
| **A – Leave it dormant** | Code stays in the repo, server never starts. Zero effort. |
| **B – Migrate auth to Strapi** | Use Strapi's built-in `users-permissions` plugin. Delete `apps/server`. |
| **C – Delete it now** | `git rm -r apps/server` and remove its entry from `lerna.json`. |

**Recommendation:** Do **Option C** once Step 9 passes.
The code is safely backed up in git history.

---

## Summary table

| Step | Phase | Priority | Action |
|------|-------|----------|--------|
| 1 | Local | 🔴 First | `git pull origin <branch>` (no merge needed yet) + `yarn install` |
| 2a | Local | 🔴 First | Check `https://medsupport.kz/cms/graphql` is reachable |
| 2b | Local | 🔴 First (if VPS is down) | Start VPS → SSH in → `pm2 start ecosystem.config.js --only cms --env production` |
| 2c | Local | 🔴 First | Confirm `apps/web/.env.development` exists |
| 3 | Local | 🔴 First | `yarn workspace @medsupportkz/web web:start` (local PC only) |
| 4 | Local | 🔴 First | Verify 7 pages at localhost:3000 with real content |
| 5 | Security | 🔴 NOW | Rotate Strapi admin password (any time) |
| — | VPS pre-req | 🟡 Before Step 6 | **Merge PR into `main`** on GitHub |
| 6 | VPS | 🟡 After merge | Stop Express server on VPS |
| 7 | VPS | 🟡 After merge | Deploy updated nginx.conf |
| 8 | VPS | 🟡 After merge | `git pull origin main` + `pm2 reload ecosystem.config.js` on VPS |
| 9 | VPS | 🟢 After Step 8 | Verify live URLs |
| 10 | VPS | 🟢 After Step 8 | Confirm memory usage dropped |
| 11 | Cleanup | 🔵 Later | Delete `apps/server` source code |
