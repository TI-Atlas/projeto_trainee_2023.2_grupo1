import { MigrationInterface, QueryRunner, Table, Column, TableColumn, TableForeignKey } from "typeorm"

export class Cliente1699795030847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'Clientes',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true,
                    },
                    {
                        name:'nome',
                        type:'varchar'
                    },
                    {
                        name:'email',
                        type:'varchar',
                        isUnique:true 
                    },
                    {
                        name:'endereco', 
                        type:'varchar'
                    },
                    {
                        name:'senha',
                        type:'varchar'
                    },
                    {
                        name:'telefone',
                        type:'varchar'
                    },
                    {
                        name:'cpf',
                        type:'varchar'
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:'now()'
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default:'now()'
                    }
                ]


            })
        );
    } 

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Clientes')
    }

}
