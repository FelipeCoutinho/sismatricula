import {MigrationInterface, QueryRunner} from "typeorm";

export class MainMigrations1614815286754 implements MigrationInterface {
    name = 'MainMigrations1614815286754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `conteudo` (`id` int NOT NULL AUTO_INCREMENT, `descicao` text NOT NULL, `aulaId` int NULL, UNIQUE INDEX `REL_827018c4239d65ec1573e8ca5e` (`aulaId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `turma` (`id` int NOT NULL AUTO_INCREMENT, `nome` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `aula` (`id` int NOT NULL AUTO_INCREMENT, `descricao` text NOT NULL, `turmaId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `estudante` (`id` int NOT NULL AUTO_INCREMENT, `nome` varchar(200) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `nome` varchar(200) NOT NULL, `password` varchar(100) NOT NULL, `createdat` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedat` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `conteudo` ADD CONSTRAINT `FK_827018c4239d65ec1573e8ca5ea` FOREIGN KEY (`aulaId`) REFERENCES `aula`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `aula` ADD CONSTRAINT `FK_9be5f2ae728b9b2b97363c38a80` FOREIGN KEY (`turmaId`) REFERENCES `turma`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `aula` DROP FOREIGN KEY `FK_9be5f2ae728b9b2b97363c38a80`");
        await queryRunner.query("ALTER TABLE `conteudo` DROP FOREIGN KEY `FK_827018c4239d65ec1573e8ca5ea`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `estudante`");
        await queryRunner.query("DROP TABLE `aula`");
        await queryRunner.query("DROP TABLE `turma`");
        await queryRunner.query("DROP INDEX `REL_827018c4239d65ec1573e8ca5e` ON `conteudo`");
        await queryRunner.query("DROP TABLE `conteudo`");
    }

}
