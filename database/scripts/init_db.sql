DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_catalog.pg_user WHERE usename = 'ares') THEN
        CREATE USER ares WITH PASSWORD 'ArEsPaSsWoRd';
    END IF;
END $$;
CREATE DATABASE habits OWNER 'ares';

\c habits

DROP TABLE IF EXISTS habit_sheet;

CREATE TABLE habit_sheet (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
