import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


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
    @Column()
    team: string;
}

export default Player