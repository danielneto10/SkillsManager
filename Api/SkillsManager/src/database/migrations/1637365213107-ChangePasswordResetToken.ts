import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangePasswordResetToken1637365213107 implements MigrationInterface {
    name = 'ChangePasswordResetToken1637365213107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`password_reset_token\` \`password_reset_token\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`password_reset_token\` \`password_reset_token\` varchar(255) NOT NULL`);
    }

}
