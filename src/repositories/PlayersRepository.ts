import Player from '../models/Player'
import { EntityRepository, Repository } from 'typeorm'
import Team from '../models/Team';
@EntityRepository(Player)
class PlayerRepository extends Repository<Player>{
    public async findByPlayer(name: string): Promise<Player | null> {
        const findPlayer = await this.findOne({
            where: { name }
        })
        return findPlayer || null
    }
}

export default PlayerRepository;

