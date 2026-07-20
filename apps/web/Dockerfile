# syntax=docker/dockerfile:1

# ---- Stage 1: Install dependencies ----
# Workspace manifests are copied first to maximise layer cache hits.
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json yarn.lock ./
COPY apps/web/package.json apps/web/

RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,sharing=locked \
    YARN_CACHE_FOLDER=/usr/local/share/.cache/yarn \
    yarn install --frozen-lockfile

# ---- Stage 2: Build ----
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock ./
COPY --from=deps /app/node_modules ./node_modules
COPY apps/web/ apps/web/

# next.config.mjs inlines these into the bundle at BUILD time, so they must be
# present here — the compose env_file only applies at runtime, which would bake
# `undefined` into the client bundle and leave Apollo with `uri: undefined`.
ARG BASE_URL
ARG API_BASE_URL
ARG CMS_GRAPHQL_API_URL
ARG GA_TRACKING_ID
ARG GOOGLE_COUNTER_ID
ARG YM_COUNTER_ID
ENV BASE_URL=$BASE_URL \
    API_BASE_URL=$API_BASE_URL \
    CMS_GRAPHQL_API_URL=$CMS_GRAPHQL_API_URL \
    GA_TRACKING_ID=$GA_TRACKING_ID \
    GOOGLE_COUNTER_ID=$GOOGLE_COUNTER_ID \
    YM_COUNTER_ID=$YM_COUNTER_ID

RUN yarn workspace @medsupportkz/web build

# ---- Stage 3: Production runner ----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web     ./apps/web

WORKDIR /app/apps/web

EXPOSE 3000

# The custom Express server (src/server.ts) was removed in the Next 15 migration;
# its proxying is now handled by rewrites in next.config.mjs.
CMD ["/app/node_modules/.bin/next", "start"]
