import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Diagnostico } from '../value-objects/diagnostico';
import { examen } from '../value-objects/examen-realizar';
import { Historia } from '../value-objects/historia';
import { Plan } from '../value-objects/plan';
import { preescripcion } from '../value-objects/preescripcion';

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
