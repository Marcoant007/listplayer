import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('team')
class Team {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    awards: string;

}

export default Team