# Vérifiez si le fichier .env.db existe et chargez les variables d'environnement
if (Test-Path .env.db) {
    Get-Content .env.db | ForEach-Object {
        $line = $_.Split('=')
        [System.Environment]::SetEnvironmentVariable($line[0], $line[1])
    }
}

# Arrêtez et supprimez le conteneur PostgreSQL existant s'il existe
if (docker inspect ares-database-postgres -ErrorAction SilentlyContinue) {
    docker stop ares-database-postgres | Out-Null
    docker rm ares-database-postgres | Out-Null
}

# Téléchargez l'image PostgreSQL et démarrez un nouveau conteneur
docker pull postgres
docker run --name ares-database-postgres `
    -e POSTGRES_USER=$env:DB_USER `
    -e POSTGRES_PASSWORD=$env:DB_PASSWORD `
    -e POSTGRES_DB=$env:DB_NAME `
    -p ${env:DB_PORT}:5432 `
    -d postgres

# Attendez que la base de données soit prête
Write-Host "Waiting for PostgreSQL to start..."
do {
    Start-Sleep -Seconds 5
    $result = docker exec -i ares-database-postgres pg_isready -U $env:DB_USER
} while ($result -notmatch "accepting connections")

# Vérifiez si le fichier init_db.sql existe, sinon copiez-le à partir de init_db.default.sql
if (-Not (Test-Path 'scripts/init_db.sql')) {
    if (-Not (Test-Path 'scripts/ref/init_db.default.sql')) {
        Write-Host "Log file not found!"
        exit 1
    } else {
        Copy-Item 'scripts/ref/init_db.default.sql' 'scripts/init_db.sql'
        Write-Host "Generating an init db file with set environment variables"
    }
}

# Remplacez les placeholders dans le script SQL par les valeurs des variables d'environnement
(Get-Content scripts/init_db.sql) -replace ":DB_USER", $env:DB_USER `
                                   -replace ":DB_PASSWORD", $env:DB_PASSWORD `
                                   -replace ":DB_NAME", $env:DB_NAME | Set-Content scripts/init_db.sql

# Copiez le script SQL dans le conteneur
docker cp scripts/init_db.sql ares-database-postgres:/docker-entrypoint-initdb.d/init_db.sql
if ($LASTEXITCODE -ne 0) {
    Write-Host "Database initialization script copy failed"
    exit 1
}

# Exécutez le script SQL à l'intérieur du conteneur
docker exec -i ares-database-postgres psql -U $env:DB_USER -d $env:DB_NAME -f /docker-entrypoint-initdb.d/init_db.sql
if ($LASTEXITCODE -ne 0) {
    Write-Host "Database initialization failed"
    exit 1
}

# Nettoyage
docker exec -i ares-database-postgres rm /docker-entrypoint-initdb.d/init_db.sql
if ($LASTEXITCODE -ne 0) {
    Write-Host "Database initialization cleanup failed"
    exit 1
}

Write-Host "Database initialization complete."