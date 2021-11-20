import {MigrationInterface, QueryRunner} from "typeorm";

export class CascadeOnDeleteUserSkill1637369021712 implements MigrationInterface {
    name = 'CascadeOnDeleteUserSkill1637369021712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP FOREIGN KEY \`FK_c7e4f0b8d58a56f71dd097d7546\``);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD CONSTRAINT \`FK_c7e4f0b8d58a56f71dd097d7546\` FOREIGN KEY (\`skillId\`) REFERENCES \`skill\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` DROP FOREIGN KEY \`FK_c7e4f0b8d58a56f71dd097d7546\``);
        await queryRunner.query(`ALTER TABLE \`user_skills_skill\` ADD CONSTRAINT \`FK_c7e4f0b8d58a56f71dd097d7546\` FOREIGN KEY (\`skillId\`) REFERENCES \`skill\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
