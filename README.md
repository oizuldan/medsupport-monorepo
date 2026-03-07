# medsupportkz

## Production Deployment Guide (VPS – Ubuntu 20.04 LTS, 2 CPU / 2 GB RAM)

### Why the server keeps failing (Problem 1)

Three Node.js processes (web on :3000, server on :8000, CMS on :1337) compete for
memory on a 2 GB machine.  `forever` does not enforce memory limits, so any one
process can consume all available RAM, causing the OS to OOM-kill it and leaving
nginx with a dead upstream → **502 Bad Gateway**.

The fix involves three steps:

1. Replace `forever` with **PM2** (includes memory-limit restarts and automatic
   log rotation).
2. Place **Nginx** in front of all three processes as a reverse proxy (see
   `nginx/nginx.conf`) – this keeps client connections alive during a restart and
   adds gzip compression at the edge.
3. Pre-build the CMS *outside* the VPS (see Problem 2 below).

### Is the custom Express server needed? (Problem 3)

**No – not in the current production deployment.**

A detailed analysis is in [`docs/server-analysis.md`](docs/server-analysis.md).
The short version:

- `apps/server` exposes 5 REST endpoints and 1 Socket.IO namespace (auth,
  document upload to Google Drive, Google Custom Search proxy, real-time chat).
- **All seven routes** in `apps/web/src/routes.ts` that would reach the server
  are **commented out**.  No live page calls the server.
- The server is consuming ≈ 300 MB of RAM for zero benefit.

**Immediate recommendation:** stop the server process on the VPS by commenting
out the `server` entry in `ecosystem.config.js`.  This directly reduces the
memory pressure that causes 502 errors.

See `docs/server-analysis.md` for a full breakdown of each endpoint, what it
does, whether Strapi could replace it, and three longer-term options (stop /
migrate to Strapi auth / delete).

> ⚠️ The Strapi admin password that was hardcoded in
> `apps/server/src/services/DocumentService.ts` has been removed and replaced
> with environment variables (`CMS_IDENTIFIER` / `CMS_PASSWORD`).  **Rotate the
> Strapi admin password immediately** – it was committed in plain text and is now
> part of the git history.

### Quick-start with PM2

```bash
# 1. Install PM2 globally (one-time)
npm install -g pm2

# 2. Build shared packages (must run before starting web or server)
yarn compile

# 3. Build the Next.js frontend
cd apps/web && yarn build && cd ../..

# 4. Start web and CMS only (server is currently not needed — see docs/server-analysis.md)
pm2 start ecosystem.config.js --only web,cms --env production

# To also start the server (e.g. if you re-enable its routes):
# pm2 start ecosystem.config.js --only server --env production

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
| server | `apps/server/src/config/.env` | `PORT`, `MNG_USR`, `MNG_PSWD`, `MNG_DB`, `SECRET`, `GMAIL_USER`, `GMAIL_PASSWORD`, `GOOGLE_APPLICATION_CREDENTIALS`, `GOOGLE_DRIVE_DEV_KEY`, `GOOGLE_DISK_FOLDER_ID`, `GOOGLE_SEARCH_API_KEY`, `GOOGLE_SEARCH_ENGINE_ID` |
| cms | `apps/cms/.env` | `PORT`, `MNG_USR`, `MNG_PSWD`, `MNG_DB`, **`ADMIN_JWT_SECRET`** |
| web | `apps/web/.env.production` | `PORT`, `API_BASE_URL`, `BASE_URL`, `CMS_GRAPHQL_API_URL` |

> ⚠️ **Generate a strong random value for `ADMIN_JWT_SECRET`** – never use the
> placeholder from `.env.example`:
> ```bash
> node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
> ```

### Outdated dependencies (Problem 4)

The repository targets Node ≥ 14.  Key upgrades needed in a future iteration:

| Package | Current | Recommended |
|---------|---------|-------------|
| Next.js | 9.5 | 13+ |
| React | 16.13 | 18+ |
| TypeScript | 3.8 | 5+ |
| Strapi | 3.6.3 | 4+ |
| Node.js runtime | 12-14 | 18 LTS |


