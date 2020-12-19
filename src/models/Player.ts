import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Timestamp, ManyToOne, JoinColumn, OneToOne, ManyToMany, JoinTable } from 'typeorm'
import Team from "./Team"
import Position from './Position'

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

    @OneToMany(type => Player, position => Position, { eager: true })
    player: Position[]

    @OneToMany(type => Position, player => Player, { eager: true, cascade: true })
    position: Player[]

    @Column('int4')
    team_id: number;

    @ManyToOne(type => Team, players => Player, { eager: true })
    @JoinColumn({ name: "team_id" })
    team: Team

}

export default Player