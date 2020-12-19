import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import PlayerRepository from '../repositories/PlayersRepository'
import Player, { Position } from "./Position"


@Entity('player_has_position')
class Player_has_position {
    @PrimaryGeneratedColumn()
    id: number

    @Column('int4')
    player_id: number

    @Column('int4')
    position_id: number

    @ManyToOne(type => Player)
    @JoinColumn({ name: "player_id" })
    player: Player

    @ManyToOne(type => Position)
    @JoinColumn({ name: "position_id" })
    position: Position
}

export default Player_has_position