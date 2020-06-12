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
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'Generation',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'Evolution_Stage',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'Evolved',
            type: 'boolean',
            isNullable: true,
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
            isNullable: true,
          },
          {
            name: 'Type_2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'Weather_1',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'Weather_2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'STAT_TOTAL',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'ATK',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'DEF',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'STA',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'Legendary',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'Aquireable',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'Spawns',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'Regional',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'Raidable',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'Hatchable',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'Shiny',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'Nest',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'New',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'Not_Gettable',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'Future_Evolve',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'CP_40',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'CP_39',
            type: 'integer',
            isNullable: true,
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
