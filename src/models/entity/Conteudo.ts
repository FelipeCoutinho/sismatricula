import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import Aula from './Aula';

@Entity()
export default class Conteudo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    descicao: string;

    @OneToOne(type => Aula, conteudo => Conteudo)
    @JoinColumn()
    aula: Aula;
}