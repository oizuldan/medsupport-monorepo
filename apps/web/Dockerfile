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

RUN yarn install --frozen-lockfile

# ---- Stage 2: Build ----
FROM node:14-alpine AS builder
WORKDIR /app

# Root manifest is required so yarn can resolve workspaces
COPY package.json yarn.lock ./

COPY --from=deps /app/node_modules ./node_modules

# Copy source code for packages and web app only
COPY packages/ packages/
COPY apps/web/ apps/web/

# 1. Compile the shared @medsupportkz/next package (produces packages/next/lib)
RUN yarn workspace @medsupportkz/next compile

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
