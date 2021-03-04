import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class user1614627238165 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    type: "int",
                    name: "id",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'

                },
                {
                    type: "varchar",
                    name: "nome"
                },
                {
                    type: "date",
                    name: "created_At",
                    default: "now()"

                },
                {
                    type: "date",
                    name: "updated_At",
                    default: "now()"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user")
    }

}
