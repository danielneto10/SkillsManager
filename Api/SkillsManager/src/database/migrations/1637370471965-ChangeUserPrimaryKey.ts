import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeUserPrimaryKey1637370471965 implements MigrationInterface {
    name = 'ChangeUserPrimaryKey1637370471965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`social_media\` DROP FOREIGN KEY \`FK_028d424b1a24fb43ba3af26817f\``);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP FOREIGN KEY \`FK_b5cce6242aae7bce521a76a3be1\``);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP FOREIGN KEY \`FK_c7e4f0b8d58a56f71dd097d7546\``);
        await queryRunner.query(`DROP INDEX \`IDX_da5934070b5f2726ebfd3122c8\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_b5cce6242aae7bce521a76a3be\` ON \`user_skills_skill\``);
        await queryRunner.query(`ALTER TABLE \`social_media\` CHANGE \`userId\` \`userUserName\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` CHANGE \`userId\` \`userUserName\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`social_media\` DROP COLUMN \`userUserName\``);
        await queryRunner.query(`ALTER TABLE \`social_media\` ADD \`userUserName\` varchar(80) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD PRIMARY KEY (\`userName\`)`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD PRIMARY KEY (\`skillId\`)`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP COLUMN \`userUserName\``);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD \`userUserName\` varchar(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD PRIMARY KEY (\`skillId\`, \`userUserName\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_c9bb93f2bf51d5f85c29196627\` ON \`user_skills_skill\` (\`userUserName\`)`);
        await queryRunner.query(`ALTER TABLE \`social_media\` ADD CONSTRAINT \`FK_40713754cbbd71472fd12fde215\` FOREIGN KEY (\`userUserName\`) REFERENCES \`user\`(\`userName\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD CONSTRAINT \`FK_c9bb93f2bf51d5f85c29196627e\` FOREIGN KEY (\`userUserName\`) REFERENCES \`user\`(\`userName\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD CONSTRAINT \`FK_c7e4f0b8d58a56f71dd097d7546\` FOREIGN KEY (\`skillId\`) REFERENCES \`skill\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP FOREIGN KEY \`FK_c7e4f0b8d58a56f71dd097d7546\``);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP FOREIGN KEY \`FK_c9bb93f2bf51d5f85c29196627e\``);
        await queryRunner.query(`ALTER TABLE \`social_media\` DROP FOREIGN KEY \`FK_40713754cbbd71472fd12fde215\``);
        await queryRunner.query(`DROP INDEX \`IDX_c9bb93f2bf51d5f85c29196627\` ON \`user_skills_skill\``);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD PRIMARY KEY (\`skillId\`)`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP COLUMN \`userUserName\``);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD \`userUserName\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD PRIMARY KEY (\`userUserName\`, \`skillId\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`social_media\` DROP COLUMN \`userUserName\``);
        await queryRunner.query(`ALTER TABLE \`social_media\` ADD \`userUserName\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` CHANGE \`userUserName\` \`userId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`social_media\` CHANGE \`userUserName\` \`userId\` int NULL`);
        await queryRunner.query(`CREATE INDEX \`IDX_b5cce6242aae7bce521a76a3be\` ON \`user_skills_skill\` (\`userId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_da5934070b5f2726ebfd3122c8\` ON \`user\` (\`userName\`)`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD CONSTRAINT \`FK_c7e4f0b8d58a56f71dd097d7546\` FOREIGN KEY (\`skillId\`) REFERENCES \`skill\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD CONSTRAINT \`FK_b5cce6242aae7bce521a76a3be1\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`social_media\` ADD CONSTRAINT \`FK_028d424b1a24fb43ba3af26817f\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
