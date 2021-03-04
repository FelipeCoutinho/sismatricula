import {MigrationInterface, QueryRunner} from "typeorm";

export class RelacionamentoEstudanteAula1614819178505 implements MigrationInterface {
    name = 'RelacionamentoEstudanteAula1614819178505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `estudante_aula_aula` (`estudanteId` int NOT NULL, `aulaId` int NOT NULL, INDEX `IDX_857b914f4f10fd2cccf8e47123` (`estudanteId`), INDEX `IDX_acfedb8b0e0de827ddea34a3d7` (`aulaId`), PRIMARY KEY (`estudanteId`, `aulaId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `estudante_aula_aula` ADD CONSTRAINT `FK_857b914f4f10fd2cccf8e47123b` FOREIGN KEY (`estudanteId`) REFERENCES `estudante`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `estudante_aula_aula` ADD CONSTRAINT `FK_acfedb8b0e0de827ddea34a3d76` FOREIGN KEY (`aulaId`) REFERENCES `aula`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `estudante_aula_aula` DROP FOREIGN KEY `FK_acfedb8b0e0de827ddea34a3d76`");
        await queryRunner.query("ALTER TABLE `estudante_aula_aula` DROP FOREIGN KEY `FK_857b914f4f10fd2cccf8e47123b`");
        await queryRunner.query("DROP INDEX `IDX_acfedb8b0e0de827ddea34a3d7` ON `estudante_aula_aula`");
        await queryRunner.query("DROP INDEX `IDX_857b914f4f10fd2cccf8e47123` ON `estudante_aula_aula`");
        await queryRunner.query("DROP TABLE `estudante_aula_aula`");
    }

}
