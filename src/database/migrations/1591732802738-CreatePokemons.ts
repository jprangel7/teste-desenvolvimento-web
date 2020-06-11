import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePokemons1591732802738 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pokemons',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'Pokedex_Number',
            type: 'integer',
          },
          {
            name: 'Name',
            type: 'varchar',
          },
          {
            name: 'Img_name',
            type: 'integer',
          },
          {
            name: 'Generation',
            type: 'integer',
          },
          {
            name: 'Evolution_Stage',
            type: 'integer',
          },
          {
            name: 'Evolved',
            type: 'boolean',
          },
          {
            name: 'FamilyID',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'Cross_Gen',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'Type_1',
            type: 'varchar',
          },
          {
            name: 'Type_2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'Weather_1',
            type: 'varchar',
          },
          {
            name: 'Weather_2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'STAT_TOTAL',
            type: 'integer',
          },
          {
            name: 'ATK',
            type: 'integer',
          },
          {
            name: 'DEF',
            type: 'integer',
          },
          {
            name: 'STA',
            type: 'integer',
          },
          {
            name: 'Legendary',
            type: 'boolean',
          },
          {
            name: 'Aquireable',
            type: 'boolean',
          },
          {
            name: 'Spawns',
            type: 'integer',
          },
          {
            name: 'Regional',
            type: 'integer',
          },
          {
            name: 'Raidable',
            type: 'integer',
          },
          {
            name: 'Hatchable',
            type: 'integer',
          },
          {
            name: 'Shiny',
            type: 'boolean',
          },
          {
            name: 'Nest',
            type: 'integer',
          },
          {
            name: 'New',
            type: 'boolean',
          },
          {
            name: 'Not_Gettable',
            type: 'boolean',
          },
          {
            name: 'Future_Evolve',
            type: 'boolean',
          },
          {
            name: 'CP_40',
            type: 'integer',
          },
          {
            name: 'CP_39',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: true,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemons');
  }
}
