#! /bin/bash

if [ -f .env_database ]; then
	export $(cat .env_database | xargs)
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
	-e POSTGRES_PASSWORD=${DB_PASSWORD} \
	-d postgres
	# -v $PWD/scripts:/docker-entrypoint-initdb.d \

# Wait for the database to be ready
echo "Waiting for PostgreSQL to start..."
sleep 10

# Replace placeholders in the SQL script with actual values from the environment variables
sed -i "s/:DB_USER/$DB_USER/g" scripts/init_db.sql
sed -i "s/:DB_PASSWORD/$DB_PASSWORD/g" scripts/init_db.sql
sed -i "s/:DB_NAME/$DB_NAME/g" scripts/init_db.sql

# Copy the SQL script to the container
docker cp scripts/init_db.sql ares-database-postgres:/init_db.sql

# Execute the SQL script inside the container
docker exec -i ares-database-postgres psql -U postgres -f /init_db.sql

# Cleanup
docker exec -i ares-database-postgres rm /init_db.sql

echo "Database initialization complete."
