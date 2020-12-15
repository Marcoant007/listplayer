import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationLessonContent1608066198206 implements MigrationInterface {
    name = 'RelationLessonContent1608066198206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" DROP COLUMN "team"`);
        await queryRunner.query(`ALTER TABLE "players" ADD "teamId" integer`);
        await queryRunner.query(`COMMENT ON COLUMN "team"."id" IS NULL`);
        await queryRunner.query(`ALTER TABLE "team" ADD CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "team" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "team_id_seq"`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "awards"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "awards" character varying NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "players"."id" IS NULL`);
        await queryRunner.query(`ALTER TABLE "players" ADD CONSTRAINT "PK_de22b8fdeee0c33ab55ae71da3b" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "players" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "players" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "players" ALTER COLUMN "age" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "players"."age" IS NULL`);
        await queryRunner.query(`ALTER TABLE "players" DROP COLUMN "nationality"`);
        await queryRunner.query(`ALTER TABLE "players" ADD "nationality" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "players" DROP COLUMN "position"`);
        await queryRunner.query(`ALTER TABLE "players" ADD "position" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "players" ADD CONSTRAINT "FK_ecaf0c4aabc76f1a3d1a91ea33c" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" DROP CONSTRAINT "FK_ecaf0c4aabc76f1a3d1a91ea33c"`);
        await queryRunner.query(`ALTER TABLE "players" DROP COLUMN "position"`);
        await queryRunner.query(`ALTER TABLE "players" ADD "position" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "players" DROP COLUMN "nationality"`);
        await queryRunner.query(`ALTER TABLE "players" ADD "nationality" character varying(255)`);
        await queryRunner.query(`COMMENT ON COLUMN "players"."age" IS NULL`);
        await queryRunner.query(`ALTER TABLE "players" ALTER COLUMN "age" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "players" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "players" ADD "name" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "players" DROP CONSTRAINT "PK_de22b8fdeee0c33ab55ae71da3b"`);
        await queryRunner.query(`COMMENT ON COLUMN "players"."id" IS NULL`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "awards"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "awards" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "name" character varying(255)`);
        await queryRunner.query(`CREATE SEQUENCE "team_id_seq" OWNED BY "team"."id"`);
        await queryRunner.query(`ALTER TABLE "team" ALTER COLUMN "id" SET DEFAULT nextval('team_id_seq')`);
        await queryRunner.query(`ALTER TABLE "team" DROP CONSTRAINT "PK_f57d8293406df4af348402e4b74"`);
        await queryRunner.query(`COMMENT ON COLUMN "team"."id" IS NULL`);
        await queryRunner.query(`ALTER TABLE "players" DROP COLUMN "teamId"`);
        await queryRunner.query(`ALTER TABLE "players" ADD "team" character varying(255)`);
    }

}
