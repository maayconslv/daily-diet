import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserAndMeal1742691777547 implements MigrationInterface {
    name = 'AddUserAndMeal1742691777547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "passwordHash" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meal" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "insideDiet" boolean NOT NULL, "sessionId" integer, CONSTRAINT "PK_ada510a5aba19e6bb500f8f7817" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "meal" ADD CONSTRAINT "FK_fb1b5044ac1034c4510bf157bc0" FOREIGN KEY ("sessionId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meal" DROP CONSTRAINT "FK_fb1b5044ac1034c4510bf157bc0"`);
        await queryRunner.query(`DROP TABLE "meal"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
