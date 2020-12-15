import { Router } from 'express'
import CreatedTeamService from '../services/Teams/CreatedTeamService'
import ListedTeamService from '../services/Teams/ListedTeamService'
import DeletedTeamService from '../services/Teams/DeletedTeamService'
import UpdatedTeamService from '../services/Teams/UpdatedTeamService'


const teamsRouter = Router()

teamsRouter.get('/', async (request, response) => {
    const listTeam = new ListedTeamService();
    const teams = await listTeam.execute()
    return response.status(200).json(teams)

})


teamsRouter.post('/', async (request, response) => {
    try {
        const { name, awards } = request.body
        const createdTeam = new CreatedTeamService()
        const teams = await createdTeam.execute({
            name,
            awards
        })
        console.log(name)
        console.log(awards)
        return response.status(200).json(teams)
    }
    catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

export default teamsRouter