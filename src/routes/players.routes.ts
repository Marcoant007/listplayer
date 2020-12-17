import { Router } from 'express';
import CreatedPlayerService from '../services/Players/CreatedPlayerService';
import ListedPlayerService from '../services/Players/ListedPlayerService';
import DeletedPlayerService from '../services/Players/DeletedPlayerService';
import UpdatedPlayerService from '../services/Players/UpdatedPlayerService';
import { id } from 'date-fns/locale';



const playersRouter = Router();

playersRouter.get('/', async (request, response) => {
    const listedPlayer = new ListedPlayerService();
    const players = await listedPlayer.execute()
    return response.json(players);
})


playersRouter.post('/', async (request, response) => {
    try {
        const { name, age, nationality, team_id, position } = request.body;
        const createdPlayer = new CreatedPlayerService();
        const players = await createdPlayer.execute({
            name,
            age,
            nationality,
            position,
            team_id,
        })
        console.log(name)
        console.log(age)
        console.log(nationality)
        console.log(team_id)
        return response.status(200).json(players)
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

playersRouter.put('/:id', async (request, response) => {
    const { id } = request.params
    const { name, age, nationality, team, position } = request.body
    const updatedPlayer = new UpdatedPlayerService();
    const players = await updatedPlayer.execute({
        id: Number(id),
        name: name,
        age: age,
        nationality: nationality,
        position: position,

    })
    return response.json(players)
})
interface RouteDel {
    id: number,
}

playersRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedPlayer = new DeletedPlayerService()
    await deletedPlayer.execute({ id: +id })
    return response.status(204).send({})
})

export default playersRouter