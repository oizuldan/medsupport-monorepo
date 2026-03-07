# TODO: Decommission the Express server

This is a prioritised, copy-pasteable checklist.  Work through it top-to-bottom.

---

## 🔴 1 – Rotate the leaked Strapi admin password (do this NOW)

A Strapi admin username and plaintext password were committed in the git
history of `apps/server/src/services/DocumentService.ts`.  Anyone who can read
the repository history has those credentials.

**Steps:**
1. Log in to the Strapi admin panel at `https://medsupport.kz/cms/admin`
2. Go to **Settings → Administration Panel → Users**
3. Click on the admin account and change the password to something strong
4. (Optional) Go to **Settings → API Tokens** and rotate any tokens you see

The source-code credential has already been replaced with environment variables
(`CMS_IDENTIFIER` / `CMS_PASSWORD`) in this PR, but the password change in
the Strapi UI must still be done manually.

---

## 🔴 2 – Stop the Express server on the VPS

SSH into the VPS and run:

```bash
# If you are using PM2
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

## 🟡 3 – Deploy the updated nginx config to the VPS

The nginx configuration has been updated in this PR:
- Removed the `/api/`, `/auth/`, and `/socket.io/` proxy blocks that pointed
  to the Express server.  Without these, any request to those paths is served
  by Next.js which returns a clean 404 — no more 502 Bad Gateway.

**Steps:**
```bash
# Copy the updated file to the VPS (run from your local machine)
# Replace 'your-username' with your actual SSH user (e.g. ubuntu, root, deploy)
scp nginx/nginx.conf your-username@medsupport.kz:/etc/nginx/sites-available/medsupport

# On the VPS: test and reload nginx
sudo nginx -t                          # must print "syntax is ok"
sudo systemctl reload nginx
```

---

## 🟡 4 – Deploy the updated ecosystem.config.js to the VPS

The `ecosystem.config.js` has been updated in this PR:
- The `server` entry has been removed.
- The `web` and `cms` processes now get more memory (700 MB each) since they
  no longer compete with the server for the 2 GB RAM budget.

**Steps:**
```bash
# On the VPS: pull the latest code
git pull origin main        # or whichever branch this PR merges to

# Reload PM2 with the new config
pm2 reload ecosystem.config.js --env production
pm2 save
```

---

## 🟢 5 – Verify the live website works

After completing steps 2–4, check these URLs in your browser:

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

## 🟢 6 – Confirm reduced memory usage

```bash
# On the VPS
pm2 monit        # watch live memory; web and cms should each be < 300 MB at idle

# Or a one-liner
pm2 list
```

Expected: total memory used by web + cms ≈ 400–600 MB, leaving > 1 GB free for
the OS and any spikes.

---

## 🔵 7 – (Optional) Decide the long-term fate of apps/server

See [`docs/server-analysis.md`](server-analysis.md) for the full breakdown.
The three options are:

| Option | What to do |
|--------|-----------|
| **A – Leave it dormant** | Code stays in the repo, server never starts. Zero cost. |
| **B – Migrate auth to Strapi** | Use Strapi's built-in `users-permissions` plugin (register, login, forgot-password). Delete `apps/server`. |
| **C – Delete it** | Run `git rm -r apps/server` and remove its entry from `lerna.json`. |

**Recommendation:** Do **Option C** once you have confirmed the website works
without the server (step 5 above).  The code is backed up in git history if you
ever need to refer to it.

---

## Summary

| # | Priority | Action | Who |
|---|----------|--------|-----|
| 1 | 🔴 NOW | Rotate Strapi admin password | You (UI) |
| 2 | 🔴 NOW | Stop Express server on VPS | You (SSH) |
| 3 | 🟡 Soon | Deploy updated nginx.conf | You (SSH) |
| 4 | 🟡 Soon | Deploy updated ecosystem.config.js | You (SSH + git pull) |
| 5 | 🟢 After | Verify live site | You (browser) |
| 6 | 🟢 After | Confirm memory usage dropped | You (SSH) |
| 7 | 🔵 Later | Decide fate of apps/server source code | You |
