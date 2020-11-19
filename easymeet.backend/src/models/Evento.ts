import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'

import Image from './Image'

@Entity('eventos')
export default class Evento {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    tipo: number;

    @Column()
    datahorainicial: Date;

    @Column()
    datahorafinal: Date;

    @Column()
    vagas_total: number;

    @Column()
    vagas_preenchidas: number;

    @Column()
    responsavel: string;

    @OneToMany(() => Image, image => image.evento, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'evento_id'})
    images: Image[];
}