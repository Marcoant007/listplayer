import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Timestamp, ManyToOne, JoinColumn, OneToOne, ManyToMany, JoinTable } from 'typeorm'
import Team from "./Team"
import Position from './Position'
import PlayerPosition from './PlayerPosition';

@Entity('players')
class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    nationality: string;


    @OneToMany(type => PlayerPosition, playerPosition => playerPosition.player, { eager: true, cascade: true })
    playerPositions: PlayerPosition[];

    @Column('int4')
    team_id: number;

    @ManyToOne(type => Team, players => Player, { eager: true })
    @JoinColumn({ name: "team_id" })
    team: Team

}

export default Player