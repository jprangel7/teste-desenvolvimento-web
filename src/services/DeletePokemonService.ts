import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

interface Request {
  pokedexNumber: number;
}

class DeletePokemonService {
  public async execute({ pokedexNumber }: Request): Promise<void> {
    const pokemonRepository = getRepository(Pokemon);

    const pokemon = await pokemonRepository.findOne({
      Pokedex_Number: pokedexNumber,
    });

    if (!pokemon) throw new Error();

    await pokemonRepository.remove(pokemon);
  }
}

export default DeletePokemonService;
