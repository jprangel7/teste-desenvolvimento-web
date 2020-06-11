import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Pokemon from '../models/Pokemon';

class UpdatePokemonService {
  public async execute(pokemon: Pokemon): Promise<Pokemon> {
    const pokemonRepository = getRepository(Pokemon);

    let updatedPokemon = await pokemonRepository.findOne({
      id: pokemon.id,
    });

    if (!updatedPokemon) throw new AppError('Pokemon not Found', 404);

    updatedPokemon = pokemon;

    await pokemonRepository.save(updatedPokemon);

    return updatedPokemon;
  }
}

export default UpdatePokemonService;
