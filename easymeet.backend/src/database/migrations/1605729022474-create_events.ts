import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createEvents1605729022474 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(new Table({
            name: 'eventos',
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
                    name: 'nome',
                    type: 'varchar',
                },
                {
                    name: 'descricao',
                    type: 'text'
                },
                {
                    name: 'data',
                    type: 'date'
                },
                {
                    name: 'vagas_total',
                    type: 'integer'
                },
                {
                    name: 'vagas_preenchidas',
                    type: 'integer'
                },
                {
                    name: 'responsavel',
                    type: 'varchar'
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropTable('eventos');
    }

}
