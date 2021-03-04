import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import Conteudo from './Conteudo';
import Turma from './Turma';

@Entity()
export default class Aula {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    descricao: string;

    @OneToOne(type => Conteudo, aula => Aula)
    conteudo: Conteudo;

    @ManyToOne(type => Turma, aulas => Aula, { eager: true })
    turma: Turma;

}