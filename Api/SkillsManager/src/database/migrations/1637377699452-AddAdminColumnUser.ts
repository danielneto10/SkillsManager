import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAdminColumnUser1637377699452 implements MigrationInterface {
    name = 'AddAdminColumnUser1637377699452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`admin\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`admin\``);
    }

}
