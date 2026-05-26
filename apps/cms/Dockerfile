# syntax=docker/dockerfile:1

# ---- Stage 1: Install dependencies ----
# Strapi CMS has no local workspace package dependencies, so we install
# inside the apps/cms directory directly (no workspace hoisting needed).
FROM node:14-alpine AS deps
WORKDIR /app

COPY apps/cms/package.json ./
# Cache mount keeps the yarn download cache between builds.
# Only new/changed packages are fetched on re-runs.
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,sharing=locked \
    YARN_CACHE_FOLDER=/usr/local/share/.cache/yarn \
    yarn install --ignore-engines

# ---- Stage 2: Production runner ----
# The admin panel build/ directory is committed to the repository and copied
# directly, which skips the ~5-10 min Strapi webpack build entirely.
FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY apps/cms/ .

# Strapi stores uploaded files here; mount a named volume to persist them.
VOLUME ["/app/public/uploads"]

EXPOSE 1337

CMD ["yarn", "cms:start"]
