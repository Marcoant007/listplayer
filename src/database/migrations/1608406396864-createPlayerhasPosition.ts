import { MigrationInterface, QueryRunner } from "typeorm";

export class createPlayerhasPosition1608406396864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table player_has_position (
                id serial not null,
                player_id int,
                position_id int,
                constraint fk_player foreign key (player_id) references players(id),
                constraint fk_position foreign key (position_id) references "position"(id)
        ) 
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
