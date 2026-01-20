# Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Production
FROM node:20-alpine AS runner

WORKDIR /app

# Only copy built output + needed files
COPY --from=builder /app/dist /app/dist
COPY package.json package-lock.json* ./

# Install only production deps
RUN npm install --omit=dev

EXPOSE 4321

# Run the SSR server directly
CMD ["node", "dist/server/index.js"]
