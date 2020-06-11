import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity('pokemons')
class Pokemon {
  @PrimaryColumn()
  Pokedex_Number: number;

  @Column()
  Name: string;

  @Column()
  Img_name: number;

  @Column()
  Generation: number;

  @Column()
  Evolution_Stage: number;

  @Column()
  Evolved: boolean;

  @Column()
  FamilyID: number;

  @Column()
  Cross_Gen: boolean;

  @Column()
  Type_1: string;

  @Column()
  Type_2: string;

  @Column()
  Weather_1: string;

  @Column()
  Weather_2: string;

  @Column()
  STAT_TOTAL: number;

  @Column()
  ATK: number;

  @Column()
  DEF: number;

  @Column()
  STA: number;

  @Column()
  Legendary: boolean;

  @Column()
  Aquireable: boolean;

  @Column()
  Spawns: number;

  @Column()
  Regional: number;

  @Column()
  Raidable: number;

  @Column()
  Hatchable: number;

  @Column()
  Shiny: boolean;

  @Column()
  Nest: number;

  @Column()
  New: boolean;

  @Column()
  Not_Gettable: boolean;

  @Column()
  Future_Evolve: boolean;

  @Column()
  CP_40: number;

  @Column()
  CP_39: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Pokemon;
