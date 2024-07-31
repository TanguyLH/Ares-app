# Ares-app : Un compagnon pour suivre vos habitudes

Cette application utilise une stack technologique puissante pour vous aider à suivre vos habitudes au quotidien.

## Stack technologique

* **Frontend:** React Native (Expo)
* **Backend:** NestJS avec base de données PostgreSQL

## Prérequis

* **Node.js & npm (ou yarn):**  [https://nodejs.org/en](https://nodejs.org/en)
* **Docker:** [https://www.docker.com/](https://www.docker.com/) (Assurez-vous que votre utilisateur est ajouté au groupe docker)
* **Éditeur de code (au choix):** [https://code.visualstudio.com/](https://code.visualstudio.com/) ou [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/) sont des options populaires.

## Installation de la base de données (une fois)

1. **Naviguez vers le répertoire `database`.**
2. **Exécutez le script d'initialisation:** `./initDatabase.sh`
   - Ce script créera un conteneur Docker nommé `ares-database-postgres` et configurera le schéma de la base de données en utilisant le fichier de configuration `.env.db`.

## Configuration du backend

1. **Naviguez vers le répertoire `backend`.**
2. **Installez les dépendances:** `npm install`
3. **Exécutez les migrations (une fois):** `npm run migration:run`
   - Cela garantit que le schéma de la base de données est à jour avec votre code.
4. **Insérez des données d'exemple (optionnel):** `npm run seed:run`
   - Cela peuple la base de données avec des données d'exemple (utile pour les tests).
5. **Démarrez le serveur de développement:** `npm run dev`
   - Cela démarre le serveur backend sur le port `8089`. Vous pouvez vérifier qu'il fonctionne en visitant `http://localhost:8089/api/v1/health` dans votre navigateur.

## Configuration du frontend

1. **Naviguez vers le répertoire `frontend`.**
2. **Démarrez le serveur de développement:** `npx expo start`
   - Cela démarre l'environnement de développement Expo pour le frontend.

## Documentation Swagger

La documentation de l'API backend est disponible à l'adresse `http://localhost:8089/api-definition`.

## Variables d'environnement

Le backend et la base de données utilisent des variables d'environnement définies dans `.env.db` pour leur configuration. Assurez-vous d'avoir créé ce fichier et de l'avoir rempli avec les détails nécessaires (informations de connexion à la base de données, etc.).

## Notes supplémentaires

* **Flux de travail recommandé:** Commencez par démarrer la base de données, puis le serveur backend.
* **Frontend:** Le frontend peut être développé indépendamment car il interagit avec le backend via des appels API.

## Conseils de développement

* **Contrôle de version:** Utilisez un système de contrôle de version comme Git pour la collaboration et le suivi des versions.
* **Qualité du code:** Envisagez d'utiliser un linter et un formatteur de code (ESLint, Prettier) pour maintenir la qualité de votre code.

## Contribution

N'hésitez pas à créer des demandes de fusion avec vos contributions au projet !

