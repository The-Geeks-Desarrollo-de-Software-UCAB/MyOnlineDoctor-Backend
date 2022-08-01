import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Registro {
    @PrimaryGeneratedColumn('uuid')
    registroId: string;

    @Column()
    idHistoria: string;

    @Column()
    diagnostico: string;

    @Column()
    plan: string;

    @Column()
    preescripcion: string;

    @Column()
    examen: string;


}
