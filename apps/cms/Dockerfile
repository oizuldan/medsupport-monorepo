# ---- Stage 1: Install dependencies ----
# Strapi CMS has no local workspace package dependencies, so we install
# inside the apps/cms directory directly (no workspace hoisting needed).
FROM node:14-alpine AS deps
WORKDIR /app

COPY apps/cms/package.json ./
RUN yarn install

# ---- Stage 2: Build admin panel ----
FROM node:14-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY apps/cms/ .

# Builds the Strapi admin panel UI into the build/ directory
RUN yarn build

# ---- Stage 3: Production runner ----
FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy everything from the builder (node_modules + source + built admin panel)
COPY --from=builder /app ./

# Strapi stores uploaded files here; mount a named volume to persist them.
VOLUME ["/app/public/uploads"]

EXPOSE 1337

CMD ["yarn", "cms:start"]
