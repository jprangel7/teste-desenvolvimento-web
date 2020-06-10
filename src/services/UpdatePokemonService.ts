import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

class UpdatePokemonService {
  public async execute(pokemon: Pokemon): Promise<Pokemon> {
    const pokemonRepository = getRepository(Pokemon);

    let updatedPokemon = await pokemonRepository.findOne({
      Pokedex_Number: pokemon.Pokedex_Number,
    });

    if (!updatedPokemon) throw new Error();

    updatedPokemon = pokemon;

    await pokemonRepository.save(updatedPokemon);

    return updatedPokemon;
  }
}

export default UpdatePokemonService;
