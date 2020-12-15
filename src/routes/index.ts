import { Router } from 'express';
import playersRouter from './players.routes'
import teamsRouter from './teams.routes'
const routes = Router();
routes.use('/players', playersRouter)
routes.use('/teams', teamsRouter)
export default routes;