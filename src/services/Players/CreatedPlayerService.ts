import { getCustomRepository } from 'typeorm'
import Player from '../../models/Player'
import PlayerRepository from '../../repositories/PlayersRepository'
interface Request {
    name: string,
    age: number,
    nationality: string,
    team_id: number,
    playerPositions: []
}
class CreatedPlayerService {
    public async execute({ name, age, nationality, team_id, playerPositions }: Request): Promise<Player> {
        const playersRepository = getCustomRepository(PlayerRepository)

        const playerCreated = playersRepository.create({
            name,
            age,
            nationality,
            team_id,
            playerPositions
        })
        await playersRepository.save(playerCreated)
        return playerCreated
    }
}

export default CreatedPlayerService