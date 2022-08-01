import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Registro {
    @PrimaryColumn()
    id_registro: string;

    @Column()
    prescripcion: string;

    @Column()
    historia: string;

    @Column()
    diagnostico: string;

    @Column()
    plan: string;

    @Column()
    examen: string;

    @Column()
    fecha: Date;
}
