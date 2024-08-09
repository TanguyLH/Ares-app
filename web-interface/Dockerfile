# Utilisation de l'image Node.js
FROM node:18-alpine

# Définition du répertoire de travail
WORKDIR /usr/src/app

# Copie des fichiers de package et installation des dépendances
COPY package*.json ./
RUN npm install

# Copie du reste du code
COPY . .

# Exposition du port pour Vite.js
EXPOSE 8088

# Commande de lancement de l'application en mode développement
CMD ["npm", "run", "dev"]