import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

class CreatePokemonService {
  public async execute(pokemon: Pokemon): Promise<Pokemon> {
    const pokemonRepository = getRepository(Pokemon);

    const newPokemon = pokemonRepository.create(pokemon);

    await pokemonRepository.save(newPokemon);

    return newPokemon;
  }
}

export default CreatePokemonService;
