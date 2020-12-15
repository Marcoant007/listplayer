import { getCustomRepository } from 'typeorm'
import PlayerRepository from '../repositories/PlayersRepository'

interface Request {
    id: number,
    name: string,
    age: number,
    nationality: string,
    position: string,
    team: string
}

class UpdatedPlayerService {
    public async execute({ id, name, age, nationality, position, team }: Request) {
        const playersrespository = getCustomRepository(PlayerRepository)
        const playersupadted = await playersrespository.save({
            id,
            name,
            age,
            nationality,
            position,
            team
        })
        return playersupadted
    }
}

export default UpdatedPlayerService