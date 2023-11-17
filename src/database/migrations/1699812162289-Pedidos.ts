import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm"

export class Pedidos1699812162289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(  
        new Table({
            name: 'Pedidos',
            columns: [
                {
                    name: 'ClientesID',
                    type: 'uuid',
                    isNullable: false
                },
                {
                    name: 'CamisasID',
                    type: 'uuid',
                    isNullable: false
                },
                {
                    name: 'Data_do_pedido',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'Total_do_pedido',
                    type: 'float',
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
            ],
        })
        )
         await queryRunner.addColumn(
            "Pedidos",
            new TableColumn({
              name: "id",
              type: "uuid",
            isPrimary: true,
            })
          );
          await queryRunner.createForeignKey(
            "Pedidos",
            new TableForeignKey({
              name: "camisasid_fk",
              columnNames: ["CamisasID"],
              referencedColumnNames: ["id"],
              referencedTableName: "Camisas",
              onDelete: "CASCADE",
              onUpdate: "CASCADE",
            }
            )
            );
            await queryRunner.createForeignKey(
                "Pedidos",
                new TableForeignKey({
                    name: "clientes_fk", 
                    columnNames: ["ClientesID"], 
                    referencedColumnNames: ["id"], 
                    referencedTableName: "Clientes",
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE",
                })
            );
        }



    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Pedidos')}

}
