import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Pokemon from '../models/Pokemon';

interface Request {
  parsedPokedexNumber: number;
}

class DeletePokemonService {
  public async execute({ parsedPokedexNumber }: Request): Promise<void> {
    const pokemonRepository = getRepository(Pokemon);

    const pokemon = await pokemonRepository.findOne({
      Pokedex_Number: parsedPokedexNumber,
    });

    if (!pokemon) throw new AppError('Pokemon not Found', 404);

    await pokemonRepository.remove(pokemon);
  }
}

export default DeletePokemonService;
