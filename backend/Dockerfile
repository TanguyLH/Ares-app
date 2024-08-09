# Utilisation de l'image Node.js
FROM node:18-alpine

# Définition du répertoire de travail
WORKDIR /usr/src/app

# Copie des fichiers de package et installation des dépendances
COPY package*.json ./
RUN npm install

# Copie du reste du code
COPY . .

# Compilation du code TypeScript
# RUN npm run build

# Exposition du port pour le backend
EXPOSE 8089

# Commande de lancement de l'application
# CMD ["npm", "run", "start:prod"]
CMD ["npm", "run", "dev"]