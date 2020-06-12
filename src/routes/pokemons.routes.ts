import { Router } from 'express';
import multer from 'multer';
import { getRepository } from 'typeorm';

import Pokemon from '../models/Pokemon';

import CreatePokemonService from '../services/CreatePokemonService';
import UpdatePokemonService from '../services/UpdatePokemonService';
import ImportPokemonsService from '../services/ImportPokemonsService';
import DeletePokemonService from '../services/DeletePokemonService';

import uploadConfig from '../config/upload';

const pokemonsRouter = Router();

const upload = multer(uploadConfig);

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

  const pokemon = await pokemonRepository.find({
    where: { Pokedex_Number: parsedPokedexNumber },
  });

  return response.status(200).json(pokemon);
});

pokemonsRouter.post('/', async (request, response) => {
  const { pokemon } = request.body;

  const createPokemon = new CreatePokemonService();

  const newPokemon = await createPokemon.execute(pokemon);

  return response.status(201).json(newPokemon);
});

pokemonsRouter.post(
  '/importCSV',
  upload.single('pokemon-csv'),
  async (request, response) => {
    const importPokemons = new ImportPokemonsService();

    const pokemons = await importPokemons.execute(request.file.path);

    return response.status(201).json(pokemons);
  },
);

pokemonsRouter.put('/', async (request, response) => {
  const { pokemon } = request.body;

  const updatePokemon = new UpdatePokemonService();

  const updatedPokemon = await updatePokemon.execute(pokemon);

  return response.status(200).json(updatedPokemon);
});

pokemonsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deletePokemon = new DeletePokemonService();

  await deletePokemon.execute({ id });

  return response.status(200).json({ message: 'Pokemon deleted' });
});

export default pokemonsRouter;
