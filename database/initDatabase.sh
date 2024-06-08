#! /bin/bash

if [ -f .env.db ]; then
	export $(cat .env.db | xargs)
fi

if docker inspect ares-database-postgres >/dev/null 2>&1; then
    docker stop ares-database-postgres >/dev/null 2>&1
fi

# Remove the existing PostgreSQL container if it exists
if docker inspect ares-database-postgres >/dev/null 2>&1; then
    docker rm ares-database-postgres >/dev/null 2>&1
fi


docker pull postgres
docker run --name ares-database-postgres \
    -e POSTGRES_USER=${DB_USER} \
    -e POSTGRES_PASSWORD=${DB_PASSWORD} \
    -e POSTGRES_DB=${DB_NAME} \
	-p ${DB_PORT}:5432 \
	-d postgres
	# -v $PWD/scripts:/docker-entrypoint-initdb.d \

# Wait for the database to be ready
echo "Waiting for PostgreSQL to start..."
until docker exec -i ares-database-postgres pg_isready -U ${DB_USER}; do
  echo "PostgreSQL is unavailable - sleeping"
  sleep 2
done

if [ ! -f 'scripts/init_db.sql' ]; then
	if [ ! -f 'scripts/ref/init_db.default.sql' ]; then
		echo "log file not found !"
	else
		cp scripts/ref/init_db.default.sql scripts/init_db.sql
		echo "Generating an init db file with set environment variables"
	fi
fi

# Replace placeholders in the SQL script with actual values from the environment variables
sed -i "s/:DB_USER/$DB_USER/g" scripts/init_db.sql
sed -i "s/:DB_PASSWORD/$DB_PASSWORD/g" scripts/init_db.sql
sed -i "s/:DB_NAME/$DB_NAME/g" scripts/init_db.sql

# Copy the SQL script to the container
docker cp scripts/init_db.sql ares-database-postgres:/docker-entrypoint-initdb.d/init_db.sql
if [ $? -ne 0 ]; then
	echo "Database initialiaztion script copy failed"
	exit 1
fi

# Execute the SQL script inside the container
docker exec -i ares-database-postgres psql -U ${DB_USER} -d ${DB_NAME} -f /docker-entrypoint-initdb.d/init_db.sql
if [ $? -ne 0 ]; then
	echo "Database initialization failed"
	exit 1
fi

# Cleanup
docker exec -i ares-database-postgres rm /docker-entrypoint-initdb.d/init_db.sql
if [ $? -ne 0 ]; then
	echo "Database initialization cleanup failed"
	exit 1
fi

echo "Database initialization complete."
