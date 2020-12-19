import { getCustomRepository } from 'typeorm'
import Player from '../../models/Player'
import PlayerRepository from '../../repositories/PlayersRepository'
interface Request {
    name: string,
    age: number,
    nationality: string,
    position_id: number,
    team_id: number,
}
class CreatedPlayerService {
    public async execute({ name, age, nationality, position_id, team_id }: Request): Promise<Player> {
        const playersRepository = getCustomRepository(PlayerRepository)

        const playerCreated = playersRepository.create({
            name,
            age,
            nationality,
            position_id,
            team_id
        })
        await playersRepository.save(playerCreated)
        return playerCreated
    }
}

export default CreatedPlayerService