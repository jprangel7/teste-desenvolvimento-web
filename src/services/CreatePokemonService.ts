import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Pokemon from '../models/Pokemon';

class CreatePokemonService {
  public async execute(pokemon: Pokemon): Promise<Pokemon> {
    const pokemonRepository = getRepository(Pokemon);

    const pokedexNumber = await pokemonRepository.findOne({
      Pokedex_Number: pokemon.Pokedex_Number,
    });

    const pokemonName = await pokemonRepository.findOne({
      Name: pokemon.Name,
    });

    if (pokedexNumber)
      throw new AppError('This Pokedex Number already exists', 400);
    if (pokemonName)
      throw new AppError('This Pokemon Name already exists', 400);

    const newPokemon = pokemonRepository.create(pokemon);

    await pokemonRepository.save(newPokemon);

    return newPokemon;
  }
}

export default CreatePokemonService;
