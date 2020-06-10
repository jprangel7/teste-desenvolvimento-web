import { Router } from 'express';
import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

import CreatePokemonService from '../services/CreatePokemonService';
import UpdatePokemonService from '../services/UpdatePokemonService';
import DeletePokemonService from '../services/DeletePokemonService';

const pokemonsRouter = Router();

pokemonsRouter.get('/', async (request, response) => {
  const pokemonRepository = getRepository(Pokemon);

  const allPokemons = await pokemonRepository.find();

  return response.status(200).json(allPokemons);
});

pokemonsRouter.post('/', async (request, response) => {
  const { pokemon } = request.body;

  const createPokemon = new CreatePokemonService();

  const newPokemon = await createPokemon.execute(pokemon);

  return response.status(201).json(newPokemon);
});

pokemonsRouter.put('/', async (request, response) => {
  const { pokemon } = request.body;

  const updatePokemon = new UpdatePokemonService();

  const updatedPokemon = await updatePokemon.execute(pokemon);

  return response.status(200).json(updatedPokemon);
});

pokemonsRouter.delete('/', async (request, response) => {
  const { pokedexNumber } = request.body;

  const deletePokemon = new DeletePokemonService();

  await deletePokemon.execute({ pokedexNumber });

  return response.status(200).json({ message: 'Pokemon deleted' });
});

export default pokemonsRouter;
