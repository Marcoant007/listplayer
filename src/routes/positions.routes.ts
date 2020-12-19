import { request, response, Router } from 'express'
import CreatedPositionService from '../services/Positions/CreatedPositionService';
import ListedPositonService from '../services/Positions/ListedPositionService';
import DeletedPositionService from '../services/Positions/DeletedPositionService';
import UpdatedPositionService from '../services/Positions/UpdatedPositionService';


const positionsRouter = Router()

positionsRouter.get('/', async (request, response) => {

    const listPosition = new ListedPositonService();
    const positions = await listPosition.execute()
    return response.status(200).json(positions)
})

positionsRouter.post('/', async (request, response) => {

    try {
        const { name_position_first } = request.body
        const createdPosition = new CreatedPositionService()
        const position = await createdPosition.execute({
            name_position_first
        })

        return response.status(200).json(position)
    }
    catch (err) {
        return response.status(400).json({ error: err.message })
    }
})


positionsRouter.put('/:id', async (request, response) => {
    const { id } = request.params
    const { name_position_fist, name_position_second } = request.body
    const updatedPositionService = new UpdatedPositionService()
    const postion = await updatedPositionService.execute({
        id: Number(id),
        name_position_fist: name_position_fist,
        name_position_second: name_position_second
    })

    return response.json(postion)
})

positionsRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedPosition = new DeletedPositionService()
    await deletedPosition.execute({ id: +id })
    return response.status(204).send({})

})

export default positionsRouter