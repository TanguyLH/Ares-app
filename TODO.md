# Liste des choses à faire

## Objectif

- On veut faire un habit tracker qui fonctionne pour nous.
- On veut une application web full accessible.

## Ce qu'on est pas 

- Une app native IOS
- Une app native Android

## Choses à faire 

1. Faire un déploiement de l'application sur le web
2. Faire l'authentification de bout en bout
3. Industrialisation du développement de features

### Hosting : 

Le tout dans la même AZ
1. la base de données PostgreSQL
2. le backend sur du compute privé 
3. le frontend scalable ? public

On premise <> Cloud public

#### Prérequis

1. Un système de gestion de base de données postgreSQL
    - Trouvé un moyen de se mettre sous un réseau privé
    - On veut un service pour ça !
    - Check le système de cout
2. Le backend 
    - Trouvé un moyen de créer un réseau privé
    - Utiliser un système de compute genre EC2 ?
    - Considérer le serverless ou lambdas
3. Le frontend 
    - Utiliser le réseau privé du backend
    - Être dispo sur du public
    - Acheter une entrée DNS

#### Etapes

1. Renseignements 
    a. Se renseigner sur les providers et les systèmes de couts existants
    b. Comprendre le fonctionnement du réseau privé
    c. Comprendre l'enregistrement sur entrée DNS

#### Output

1. Schéma d'architecture 
    - Réseaux 
    - Providers (Host/Cloud platform)
    - Pricing dépendant de variables (En fonction du nombre d'utilisateurs, etc ...)

### Authentification

#### Etat de l'authentification

Création et validation d'un token existe en back.

#### TODO

Ajouter les champs nécessaires d'expiration du token
Ajouter une connection et inscription sur le frontend
Vérifier la gestion du cycle de vie du token dans le front (web et pwa)

### Développement de features

#### Frontend

Faire une écran de connection et inscription pour le front
Display son username lorsqu'on est connecté
Ne pas pouvoir accéder à la page si on ne l'est pas (logique similaire au backend)

### MISC 

####  
