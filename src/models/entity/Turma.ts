import { type } from 'os';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Aula from './Aula';

@Entity()
export default class Turma {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @OneToMany(type => Aula, turma => Turma)
    aulas: Aula[];
}