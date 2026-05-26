# ---- Stage 1: Install dependencies ----
# grpc@1.24.3 ships as a native addon. On Alpine (musl libc) the pre-built
# binary is unavailable, so node-gyp compiles it from C++ source; we need
# python3, make, and g++ for that.
FROM node:14-alpine AS deps
WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package.json yarn.lock ./
COPY packages/babel-preset/package.json packages/babel-preset/
COPY packages/config/package.json          packages/config/
COPY packages/next/package.json            packages/next/
COPY apps/cms/package.json                 apps/cms/
COPY apps/server/package.json              apps/server/
COPY apps/web/package.json                 apps/web/

RUN yarn install --frozen-lockfile

# ---- Stage 2: Production runner ----
# The compiled grpc .node binary lives inside node_modules and is copied as-is.
# libstdc++ is needed at runtime by the compiled native addon.
FROM node:14-alpine AS runner
WORKDIR /app

RUN apk add --no-cache libstdc++

ENV NODE_ENV=production
ENV PORT=8000

COPY --from=deps /app/node_modules ./node_modules
COPY apps/server/ apps/server/

WORKDIR /app/apps/server

EXPOSE 8000

# ts-node is preferred over ts-node-dev (which is a dev file-watcher) in Docker.
CMD ["/app/node_modules/.bin/ts-node", "-P", "tsconfig.json", "src/server.ts"]
