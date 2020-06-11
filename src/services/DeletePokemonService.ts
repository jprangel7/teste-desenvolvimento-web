import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Pokemon from '../models/Pokemon';

interface Request {
  id: string;
}

class DeletePokemonService {
  public async execute({ id }: Request): Promise<void> {
    const pokemonRepository = getRepository(Pokemon);

    const pokemon = await pokemonRepository.findOne(id);

    if (!pokemon) throw new AppError('Pokemon not Found', 404);

    await pokemonRepository.remove(pokemon);
  }
}

export default DeletePokemonService;
