import { getCustomRepository } from 'typeorm'
import Player from '../../models/Player'
import PlayerRepository from '../../repositories/PlayersRepository'


interface Request {
    name: string,
    age: number,
    nationality: string,
    position: string,

}

class CreatedPlayerService {
    public async execute({ name, age, nationality, position }: Request): Promise<Player> {
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