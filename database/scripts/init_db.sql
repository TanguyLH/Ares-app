DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_catalog.pg_user WHERE usename = 'ares') THEN
        CREATE USER ares WITH PASSWORD 'ArEsPaSsWoRd';
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'habits') THEN
        CREATE DATABASE habits OWNER ares;
    END IF;
END $$;

\c habits

DROP TABLE IF EXISTS habitsSheet;

CREATE TABLE habitsSheet (
    id SERIAL PRIMARY KEY,
    ownerName TEXT NOT NULL
);