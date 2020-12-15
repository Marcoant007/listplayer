import { Router } from 'express';
import playersRouter from './players.routes'
const routes = Router();
routes.use('/players', playersRouter)
export default routes;