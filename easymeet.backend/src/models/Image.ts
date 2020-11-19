import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'

import Evento from './Evento';

@Entity('imagens')
export default class Imagens {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Evento, evento => evento.images)
    @JoinColumn({name: 'evento_id'})
    evento: Evento; 
}