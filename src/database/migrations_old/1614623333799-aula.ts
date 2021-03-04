import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class aula1614623333799 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "aula",
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
        queryRunner.dropTable("aula")
    }

}
