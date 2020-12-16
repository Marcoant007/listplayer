import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createPlayersTable1607627905636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table players (
            id serial not null,
            name varchar(100) not null,
            age int not null,
            nationality varchar(100) not null,
            position varchar(100) not null,
            team_id int,
            constraint pk_player primary key (id),
            constraint fk_player_team foreign key (team_id) references team(id) match simple on update no action on delete no action
            )
    `);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE players
        `);
    }

}