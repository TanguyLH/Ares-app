import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1716896539621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username TEXT NOT NULL,
                password TEXT NOT NULL,
                email TEXT NOT NULL
            );

            CREATE TABLE habit (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                description TEXT,
                authorId INT NOT NULL REFERENCES users(id),
                isDaily BOOLEAN NOT NULL DEFAULT false,
                recurrences INT[] DEFAULT '{}'
            );

            CREATE TABLE habitCompletion (
                id SERIAL PRIMARY KEY,
                habitId INT NOT NULL REFERENCES habit(id),
                userId INT NOT NULL REFERENCES users(id),
                date TIMESTAMP NOT NULL,
                completed BOOLEAN DEFAULT true
            );
            `
            ,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            DROP TABLE IF EXISTS habit_completion CASCADE;
            DROP TABLE IF EXISTS habit_recurrence CASCADE;
            DROP TABLE IF EXISTS habit CASCADE;
            DROP TABLE IF EXISTS users CASCADE;
            `,
        );
    }

}