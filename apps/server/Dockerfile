# syntax=docker/dockerfile:1

# ---- Stage 1: Install dependencies ----
# Using node:14-slim (Debian/glibc) so grpc@1.24.3 can download its prebuilt
# binary instead of compiling from C++ source (saves ~5 min on Alpine/musl).
FROM node:14-slim AS deps
WORKDIR /app

COPY package.json yarn.lock ./
COPY packages/babel-preset/package.json packages/babel-preset/
COPY packages/config/package.json          packages/config/
COPY packages/next/package.json            packages/next/
COPY apps/cms/package.json                 apps/cms/
COPY apps/server/package.json              apps/server/
COPY apps/web/package.json                 apps/web/

# Cache mount keeps the yarn download cache between builds.
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,sharing=locked \
    YARN_CACHE_FOLDER=/usr/local/share/.cache/yarn \
    yarn install --frozen-lockfile --ignore-engines

# ---- Stage 2: Production runner ----
FROM node:14-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8000

COPY --from=deps /app/node_modules ./node_modules
COPY apps/server/ apps/server/

WORKDIR /app/apps/server

EXPOSE 8000

# ts-node is preferred over ts-node-dev (which is a dev file-watcher) in Docker.
CMD ["/app/node_modules/.bin/ts-node", "-P", "tsconfig.json", "src/server.ts"]
CMD ["/app/node_modules/.bin/ts-node", "-P", "tsconfig.json", "src/server.ts"]
