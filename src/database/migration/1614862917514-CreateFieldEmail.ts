import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFieldEmail1614862917514 implements MigrationInterface {
    name = 'CreateFieldEmail1614862917514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `email` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `email`");
    }

}
