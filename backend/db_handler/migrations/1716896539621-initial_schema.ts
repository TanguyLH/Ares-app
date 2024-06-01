import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1716896539621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL
);

CREATE TABLE habitsSheet (
    id SERIAL PRIMARY KEY,
    ownerName TEXT NOT NULL
);

CREATE TABLE habit (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    habitsSheetId INT NOT NULL REFERENCES habitsSheet(id),
    authorId INT NOT NULL REFERENCES users(id)
);
            `,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
DROP TABLE IF EXISTS habit;
DROP TABLE IF EXISTS habitsSheet;
DROP TABLE IF EXISTS users;
            `,
        );
    }

}