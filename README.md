# medsupportkz

## Production Deployment Guide (VPS – Ubuntu 20.04 LTS, 2 CPU / 2 GB RAM)

### Does the web app work without the Express server?

**Yes, completely.**

All eight live routes (home, articles, vaccine, questions, resistance, about us,
article detail, question detail) read data from Strapi CMS via GraphQL.
None of them make any call to `apps/server`.

The six pages that *did* use the server (login, sign-up, password reset,
document upload, article search, live stream) have all been commented out of
`apps/web/src/routes.ts` and are not accessible from the website navigation.

**`ecosystem.config.js` now starts only `web` and `cms`.**  The `server` entry
has been removed.  The nginx config has been updated to remove the `/api/`,
`/auth/`, and `/socket.io/` proxy blocks so that those paths return a clean
Next.js 404 instead of a 502 Bad Gateway.

👉 **See [`docs/TODO.md`](docs/TODO.md) for the step-by-step checklist** of
actions you need to take on the VPS to apply these changes.

👉 **See [`docs/server-analysis.md`](docs/server-analysis.md) for the full
technical analysis** of what every server endpoint does and your options for the
long term (leave dormant / migrate auth to Strapi / delete).

### Why the server was causing failures

Three Node.js processes (web on :3000, server on :8000, CMS on :1337) were
competing for memory on a 2 GB machine.  `forever` did not enforce memory
limits, so any one process could consume all available RAM, causing the OS to
OOM-kill it and leaving nginx with a dead upstream → **502 Bad Gateway**.

Removing the server process frees ≈ 300 MB of RAM that web and CMS can now use
for their own in-memory caches, eliminating the main cause of 502 errors.

> ⚠️ **Security:** A Strapi admin password was hardcoded in
> `apps/server/src/services/DocumentService.ts`.  It has been replaced with
> environment variables in this PR, but **the password must be rotated in the
> Strapi admin panel** — the old value is in git history.
> See `docs/TODO.md` step 1.

### Quick-start with PM2

```bash
# 1. Install PM2 globally (one-time)
npm install -g pm2

# 2. Build shared packages (must run before starting web)
yarn compile

# 3. Build the Next.js frontend
cd apps/web && yarn build && cd ../..

# 4. Start web and CMS (server is no longer needed)
pm2 start ecosystem.config.js --env production

# 5. Persist PM2 across reboots
pm2 save
pm2 startup   # follow the printed instruction to register the init script
```

### Solving the CMS build on the VPS (Problem 2)

Strapi's admin panel build (`strapi build`) requires ~1.5 GB of RAM – more than
is comfortably available on a 2 GB VPS.  **Build on your local machine or in CI,
then deploy the `build/` artefacts to the VPS.**

```bash
# On your local machine / CI runner:
cd apps/cms
yarn build          # produces apps/cms/build/

# Sync the build output to the VPS (rsync example):
rsync -avz --delete build/ user@medsupport.kz:/path/to/repo/apps/cms/build/

# On the VPS – Strapi can now start without rebuilding:
pm2 start ecosystem.config.js --only cms --env production
```

### Nginx reverse proxy

Copy `nginx/nginx.conf` to `/etc/nginx/sites-available/medsupport`, then:

```bash
sudo ln -s /etc/nginx/sites-available/medsupport /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Obtain TLS certificates with [Let's Encrypt](https://certbot.eff.org/):

```bash
sudo certbot --nginx -d medsupport.kz -d www.medsupport.kz
```

### Environment variables

| App | File | Required vars |
|-----|------|---------------|
| cms | `apps/cms/.env` | `PORT`, `MNG_USR`, `MNG_PSWD`, `MNG_DB`, **`ADMIN_JWT_SECRET`** |
| web | `apps/web/.env.production` | `PORT`, `API_BASE_URL`, `BASE_URL`, `CMS_GRAPHQL_API_URL` |

> ⚠️ **Generate a strong random value for `ADMIN_JWT_SECRET`** – never use the
> placeholder from `.env.example`:
> ```bash
> node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
> ```

The server environment variables (`MNG_USR`, `GMAIL_PASSWORD`, etc.) are no
longer needed in production since the server is not running.  See
`apps/server/src/config/.env.example` if you need them in the future.

### Outdated dependencies (Problem 4)

The repository targets Node ≥ 14.  Key upgrades needed in a future iteration:

| Package | Current | Recommended |
|---------|---------|-------------|
| Next.js | 9.5 | 13+ |
| React | 16.13 | 18+ |
| TypeScript | 3.8 | 5+ |
| Strapi | 3.6.3 | 4+ |
| Node.js runtime | 12-14 | 18 LTS |

