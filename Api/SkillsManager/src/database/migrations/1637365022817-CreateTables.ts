import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1637365022817 implements MigrationInterface {
    name = 'CreateTables1637365022817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`message\` text NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`social_media\` (\`id\` int NOT NULL AUTO_INCREMENT, \`info\` varchar(255) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(80) NOT NULL, \`userName\` varchar(80) NOT NULL, \`email\` varchar(180) NOT NULL, \`about\` text NULL, \`password\` varchar(255) NOT NULL, \`perfilPhoto\` blob NULL, \`password_reset_token\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_da5934070b5f2726ebfd3122c8\` (\`userName\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`skill\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`descr\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_skills_skill\` (\`userId\` int NOT NULL, \`skillId\` int NOT NULL, INDEX \`IDX_b5cce6242aae7bce521a76a3be\` (\`userId\`), INDEX \`IDX_c7e4f0b8d58a56f71dd097d754\` (\`skillId\`), PRIMARY KEY (\`userId\`, \`skillId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`social_media\` ADD CONSTRAINT \`FK_028d424b1a24fb43ba3af26817f\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD CONSTRAINT \`FK_b5cce6242aae7bce521a76a3be1\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD CONSTRAINT \`FK_c7e4f0b8d58a56f71dd097d7546\` FOREIGN KEY (\`skillId\`) REFERENCES \`skill\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP FOREIGN KEY \`FK_c7e4f0b8d58a56f71dd097d7546\``);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP FOREIGN KEY \`FK_b5cce6242aae7bce521a76a3be1\``);
        await queryRunner.query(`ALTER TABLE \`social_media\` DROP FOREIGN KEY \`FK_028d424b1a24fb43ba3af26817f\``);
        await queryRunner.query(`DROP INDEX \`IDX_c7e4f0b8d58a56f71dd097d754\` ON \`user_skills_skill\``);
        await queryRunner.query(`DROP INDEX \`IDX_b5cce6242aae7bce521a76a3be\` ON \`user_skills_skill\``);
        await queryRunner.query(`DROP TABLE \`user_skills_skill\``);
        await queryRunner.query(`DROP TABLE \`skill\``);
        await queryRunner.query(`DROP INDEX \`IDX_da5934070b5f2726ebfd3122c8\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`social_media\``);
        await queryRunner.query(`DROP TABLE \`log\``);
    }

}
