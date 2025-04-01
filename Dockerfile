# Stage de base pour les dépendances
FROM node:18-alpine AS deps
WORKDIR /app

# Installation des dépendances nécessaires pour node-gyp
RUN apk add --no-cache libc6-compat python3 make g++

# Copie des fichiers de dépendances
COPY package.json package-lock.json ./
RUN npm ci

# Stage de build
FROM node:18-alpine AS builder
WORKDIR /app

# Copie des dépendances du stage précédent
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Installation de @tailwindcss/typography si nécessaire
RUN npm install @tailwindcss/typography

# Build de l'application
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Stage de production
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copie des fichiers nécessaires
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"] 