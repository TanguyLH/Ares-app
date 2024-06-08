# Ares-app
React / React Native / Express / Node / PostgreSQL project for an app to track your day to day habits

To run this app, first go launch the database. Afterwards, you can start the backend. 
The frontend shall not require a permanent open connection to the backend, so the order isn't relevant.

## RUN DATABASE

### Requirements 

To run the database, you'll only need to have bash, and docker, and your user set in the docker group.

### Generate for the first time

The data schema generation is done in a SQL file located in database/scripts/ref/init_db.default.sql
The init script will first check if any container instance named 'ares-database-postgres' is currently running,
and will stop it if it's the case.

We run the database, with the settings in .env.db, and copy the default sql file, to scripts/init_db.sql. We 
then replace the variables with our own using sed.
We finish the initialization by copying our init file into the docker entry point of the container, and running
the sql script. If everything went correctly, we then can remove the init script from the database.

### Commands

1. Go in database folder
2. Run ./initDatabase.sh
3. Check output

## RUN BACKEND

### Stack

#### Global
Nest JS, Open API, dotenv

#### Dev
Jest, Typescript, Nodemon 

## Commands

1. Go in backend folder
2. Run npm i
3. Run npm run start
4. Check in browser at localhost:8089/api/v1/health if you get a json healthcheck

## Frontend
To create a dev environment
**cd frontend**
**npx expo start**


To create a dev environment
```
cd frontend\Ares-app
npx expo start
```

## TODOs

-[ ] Integrate Nest and Jest to test the project
