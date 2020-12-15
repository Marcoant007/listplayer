import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Timestamp, ManyToOne, JoinColumn, OneToOne } from 'typeorm'
import Team from "./Team"

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

    @Column()
    position: string

    @ManyToOne(type => Team, players => Player)
    team: Team

}

export default Player