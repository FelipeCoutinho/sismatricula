import { type } from 'os';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import Aula from './Aula';

@Entity()
export default class Estudante {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    nome: string;

    @ManyToMany(type => Aula)
    @JoinTable()
    aula: Aula
}