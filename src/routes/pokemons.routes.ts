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

pokemonsRouter.get('/getByName', async (request, response) => {
  const { name } = request.body;

  const pokemonRepository = getRepository(Pokemon);

  const pokemon = await pokemonRepository.findOne({
    where: { Name: name },
  });

  return response.status(200).json(pokemon);
});

pokemonsRouter.get('/getByType', async (request, response) => {
  const { type } = request.body;

  const pokemonRepository = getRepository(Pokemon);

  const pokemons = await pokemonRepository.find({ where: { Type_1: type } });

  return response.status(200).json(pokemons);
});

pokemonsRouter.get('/:pokedexNumber', async (request, response) => {
  const { pokedexNumber } = request.params;
  const parsedPokedexNumber = parseInt(pokedexNumber, 10);

  const pokemonRepository = getRepository(Pokemon);

  const pokemon = await pokemonRepository.findOne({
    Pokedex_Number: parsedPokedexNumber,
  });

  return response.status(200).json(pokemon);
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

pokemonsRouter.delete('/:pokedexNumber', async (request, response) => {
  const { pokedexNumber } = request.params;
  const parsedPokedexNumber = parseInt(pokedexNumber, 10);

  const deletePokemon = new DeletePokemonService();

  await deletePokemon.execute({ parsedPokedexNumber });

  return response.status(200).json({ message: 'Pokemon deleted' });
});

export default pokemonsRouter;
