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
# --ignore-scripts skips native-addon postinstall scripts (sharp, bcrypt, etc.)
# that fail without Python / libvips.  grpc's prebuilt binary is installed
# explicitly via node-pre-gyp in the next step.
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,sharing=locked \
    YARN_CACHE_FOLDER=/usr/local/share/.cache/yarn \
    yarn install --ignore-engines --ignore-scripts

# Download grpc prebuilt binary for linux (skipped by --ignore-scripts above).
# node:14-slim uses glibc so the prebuilt grpc binary is available.
RUN node node_modules/grpc/node_modules/.bin/node-pre-gyp install \
        --fallback-to-build --library=static_library \
        --directory node_modules/grpc

# Download bcrypt prebuilt NAPI binary (also skipped by --ignore-scripts).
RUN node node_modules/bcrypt/node_modules/.bin/node-pre-gyp install \
        --fallback-to-build \
        --directory node_modules/bcrypt

# ---- Stage 2: Production runner ----
FROM node:14-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8000

COPY --from=deps /app/node_modules ./node_modules
# packages/ is required at runtime: tsconfig extends @medsupportkz/config/tsc/node
# which is a yarn workspace symlink → ../../packages/config.
COPY packages/ packages/
COPY apps/server/ apps/server/

WORKDIR /app/apps/server

EXPOSE 8000

# ts-node is preferred over ts-node-dev (which is a dev file-watcher) in Docker.
# Use the real bin.js path instead of .bin/ts-node: yarn 1 creates the .bin
# symlink pointing at apps/web/node_modules (broken in server image).
CMD ["node", "/app/node_modules/ts-node/dist/bin.js", "--transpile-only", "-P", "tsconfig.json", "src/server.ts"]
