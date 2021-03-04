import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class turma1614625629505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "turma",
            columns: [
                {
                    type: "int",
                    name: "id",
                    isPrimary: true
                },
                {
                    type: "varchar",
                    name: "nome"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("turma")
    }

}
