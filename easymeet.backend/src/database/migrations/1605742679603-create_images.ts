import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1605742679603 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'imagens',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"  
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'evento_id',
                    type: 'integer' 
                }
            ],
            foreignKeys: [
                {
                    name: 'imagem_evento',
                    columnNames: ['evento_id'],
                    referencedTableName: 'eventos',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('imagens');
    }

}
