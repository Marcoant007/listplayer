import { MigrationInterface, QueryRunner } from "typeorm";

export class createTeamTable1607633306845 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
     CREATE TABLE team (
        id serial,
        name varchar(255)
       
    )
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE team
        `);
    }
}
