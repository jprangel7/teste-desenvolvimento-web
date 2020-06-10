import { Router } from 'express';

import pokemonsRouter from './pokemons.routes';

const routes = Router();

routes.use('/pokemon', pokemonsRouter);

export default routes;
