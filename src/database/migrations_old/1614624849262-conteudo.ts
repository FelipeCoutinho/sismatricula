import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class conteudo1614624849262 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "conteudo",
            columns: [
                {
                    type: "int",
                    name: "id",
                    isPrimary: true,
                },
                {
                    type: "varchar",
                    name: "nome"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("conteudo")
    }

}
