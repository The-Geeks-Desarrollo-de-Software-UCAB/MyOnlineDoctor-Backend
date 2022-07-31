import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/entities/cita.entity';

@Entity()
export class Paciente {
  @PrimaryColumn()
  id_paciente: string;

  @Column()
  usuario: string;

  @Column()
  contrasena: string;

  @Column()
  primerNombre: string;

  @Column({ nullable: true })
  segundoNombre: string;

  @Column()
  primerApellido: string;

  @Column({ nullable: true })
  segundoApellido: string;

  @Column()
  genero: string;

  @Column()
  altura: number;

  @Column()
  correo: string;

  @Column()
  numeroMovil: string;

  @Column()
  fechaNacimiento: Date;

  @Column()
  estadoSuscripcion: string;

  @Column()
  alergia: string;

  @Column()
  operacion: string;

  @Column()
  peso: number;

  @Column()
  antecedente: string;

  @OneToMany(() => Cita, (cita) => cita.paciente)
  citas: Cita[];
}
