import { getCustomRepository } from 'typeorm'
import Player from '../../models/Player'
import Team from '../../models/Team'
import PlayerRepository from '../../repositories/PlayersRepository'
import TeamRepository from '../../repositories/TeamRepository'
interface Request {
    name: string,
    age: number,
    nationality: string,
    position: string,
    team: number,
}
class CreatedPlayerService {
    public async execute({ name, age, nationality, position, team }: Request): Promise<Player> {
        const playersRepository = getCustomRepository(PlayerRepository)

        const playerCreated = playersRepository.create({
            name,
            age,
            nationality,
            position,

        })
        await playersRepository.save(playerCreated)
        return playerCreated
    }
}

export default CreatedPlayerService