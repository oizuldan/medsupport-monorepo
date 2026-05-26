# syntax=docker/dockerfile:1

# ---- Stage 1: Install dependencies ----
# All workspace package.json files are copied first to maximise layer cache hits.
FROM node:14-alpine AS deps
WORKDIR /app

COPY package.json yarn.lock ./
COPY packages/babel-preset/package.json packages/babel-preset/
COPY packages/config/package.json          packages/config/
COPY packages/next/package.json            packages/next/
COPY apps/cms/package.json                 apps/cms/
COPY apps/server/package.json              apps/server/
COPY apps/web/package.json                 apps/web/

# Cache mount keeps the yarn download cache between builds.
# --frozen-lockfile is intentionally omitted: @babel/cli and other build-time
# devDeps are in package.json but missing from yarn.lock (lockfile is stale).
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,sharing=locked \
    YARN_CACHE_FOLDER=/usr/local/share/.cache/yarn \
    yarn install --ignore-engines

# ---- Stage 2: Build ----
FROM node:14-alpine AS builder
WORKDIR /app

# Root manifest is required so yarn can resolve workspaces
COPY package.json yarn.lock ./

COPY --from=deps /app/node_modules ./node_modules

# Copy source code for packages and web app only
COPY packages/ packages/
COPY apps/web/ apps/web/

# 1. Compile @medsupportkz/next.
#    On Alpine/busybox, executing a .bin symlink fails when the shebang
#    interpreter cannot be resolved (error looks identical to "file not found").
#    Invoking `node` directly on the real JS files bypasses both symlink
#    resolution and shebang/binfmt handling entirely.
RUN cd /app/packages/next && rm -rf lib && \
    NODE_ENV=test       node /app/node_modules/@babel/cli/bin/babel.js \
        --out-dir lib/cjs --extensions '.ts,.tsx' src && \
    NODE_ENV=production node /app/node_modules/@babel/cli/bin/babel.js \
        --out-dir lib/esm --extensions '.ts,.tsx' src && \
    node /app/node_modules/typescript/bin/tsc --outDir lib/ts -p src

# 2. Build the Next.js application
RUN yarn workspace @medsupportkz/web build

# ---- Stage 3: Production runner ----
# Docker COPY dereferences symlinks, so node_modules/@medsupportkz/next
# will contain the compiled lib/ output from the builder stage.
FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web     ./apps/web

WORKDIR /app/apps/web

EXPOSE 3000

# Uses ts-node to run the custom Express+Next.js server in production mode.
# Requires TypeScript source because this project has no separate compile step.
CMD ["/app/node_modules/.bin/ts-node", "-P", "tsconfig.json", "src/server.ts"]
