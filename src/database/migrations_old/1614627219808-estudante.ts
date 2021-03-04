import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class estudante1614627219808 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "estudante",
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
        await queryRunner.dropTable("estudante")
    }

}
