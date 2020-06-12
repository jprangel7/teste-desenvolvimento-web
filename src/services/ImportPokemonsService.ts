import csvParse from 'csv-parse';
import fs from 'fs';
import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

interface CSVPokemon {
  Pokedex_Number: number;
  Name: string;
  Img_name: string;
  Generation: number;
  Evolution_Stage: string;
  Evolved: boolean;
  FamilyID: number;
  Cross_Gen: boolean;
  Type_1: string;
  Type_2: string;
  Weather_1: string;
  Weather_2: string;
  STAT_TOTAL: number;
  ATK: number;
  DEF: number;
  STA: number;
  Legendary: boolean;
  Aquireable: boolean;
  Spawns: number;
  Regional: number;
  Raidable: number;
  Hatchable: number;
  Shiny: boolean;
  Nest: number;
  New: boolean;
  Not_Gettable: boolean;
  Future_Evolve: boolean;
  CP_40: number;
  CP_39: number;
}

class ImportPokemonsService {
  async execute(filePath: string): Promise<Pokemon[]> {
    const pokemonRepository = getRepository(Pokemon);

    const contactsReadStream = fs.createReadStream(filePath);

    const parsers = csvParse({
      from_line: 2,
      ltrim: true,
      rtrim: true,
    });

    const parseCSV = contactsReadStream.pipe(parsers);

    const pokemons: CSVPokemon[] = [];

    parseCSV.on('data', async (line) => {
      const [
        Pokedex_Number,
        Name,
        Img_name,
        Generation,
        Evolution_Stage,
        Evolved,
        FamilyID,
        Cross_Gen,
        Type_1,
        Type_2,
        Weather_1,
        Weather_2,
        STAT_TOTAL,
        ATK,
        DEF,
        STA,
        Legendary,
        Aquireable,
        Spawns,
        Regional,
        Raidable,
        Hatchable,
        Shiny,
        Nest,
        New,
        Not_Gettable,
        Future_Evolve,
        CP_40,
        CP_39,
      ] = line.map((cell: string) => cell.trim());

      if (!Pokedex_Number || !Name) return;

      pokemons.push({
        Pokedex_Number,
        Name,
        Img_name,
        Generation,
        Evolution_Stage,
        Evolved,
        FamilyID,
        Cross_Gen,
        Type_1,
        Type_2,
        Weather_1,
        Weather_2,
        STAT_TOTAL,
        ATK,
        DEF,
        STA,
        Legendary,
        Aquireable,
        Spawns,
        Regional,
        Raidable,
        Hatchable,
        Shiny,
        Nest,
        New,
        Not_Gettable,
        Future_Evolve,
        CP_40,
        CP_39,
      });
    });

    await new Promise((resolve) => {
      parseCSV.on('end', resolve);
    });

    const createdPokemons = pokemonRepository.create(
      pokemons.map((pokemon) => ({
        Pokedex_Number: pokemon.Pokedex_Number,
        Name: pokemon.Name,
        Img_name: pokemon.Img_name,
        Generation: pokemon.Generation,
        Evolution_Stage: pokemon.Evolution_Stage,
        Evolved: pokemon.Evolved,
        FamilyID: pokemon.FamilyID,
        Cross_Gen: pokemon.Cross_Gen,
        Type_1: pokemon.Type_1,
        Type_2: pokemon.Type_2,
        Weather_1: pokemon.Weather_1,
        Weather_2: pokemon.Weather_2,
        STAT_TOTAL: pokemon.STAT_TOTAL,
        ATK: pokemon.ATK,
        DEF: pokemon.DEF,
        STA: pokemon.STA,
        Legendary: pokemon.Legendary,
        Aquireable: pokemon.Aquireable,
        Spawns: pokemon.Spawns,
        Regional: pokemon.Regional,
        Raidable: pokemon.Raidable,
        Hatchable: pokemon.Hatchable,
        Shiny: pokemon.Shiny,
        Nest: pokemon.Nest,
        New: pokemon.New,
        Not_Gettable: pokemon.Not_Gettable,
        Future_Evolve: pokemon.Future_Evolve,
        CP_40: pokemon.CP_40,
        CP_39: pokemon.CP_39,
      })),
    );

    await pokemonRepository.save(createdPokemons);

    await fs.promises.unlink(filePath);

    return createdPokemons;
  }
}

export default ImportPokemonsService;
