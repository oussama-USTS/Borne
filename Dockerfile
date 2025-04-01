FROM node:18-alpine

WORKDIR /app

# Copier les fichiers de configuration d'abord
COPY package*.json ./
COPY next.config.js ./
COPY postcss.config.js ./
COPY tailwind.config.js ./

# Installer les dépendances
RUN npm ci

# Copier le reste des fichiers
COPY . .

# Build l'application
RUN npm run build

# Exposer le port
EXPOSE 3003

# Démarrer en mode production
CMD ["npm", "start"]

