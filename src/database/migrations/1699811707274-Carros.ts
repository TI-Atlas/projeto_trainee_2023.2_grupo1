import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Carros1699811707274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name: 'Carros',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'nome',
                    type: 'varchar'
                },
                {
                    name: 'descricao',
                    type: 'varchar'
                },
                {
                    name: 'preco',
                    type: 'float'
                },
                {
                    name: 'imagem',
                    type: 'varchar',
                    isNullable: true

                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        })
        )
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Carros')
    }

}
