import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createPlayersTable1607627905636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
     CREATE TABLE players (
        id serial,
        name varchar(255),
        age int,
        nationality varchar(255),
        team varchar(255),
        position varchar(255)
    )
    `);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE players
        `);
    }

}