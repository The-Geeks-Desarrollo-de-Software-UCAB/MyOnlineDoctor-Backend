import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { Especialidad } from './specialty.entity';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/Entities/cita.entity';

@Entity()
export class Doctor {
  @PrimaryColumn()
  id_doctor: string;

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

  @Column({ nullable: true })
  longitud: number;

  @Column({ nullable: true })
  latitud: number;

  @Column({ nullable: true })
  promedioCalificacion: number;

  @Column({ nullable: true })
  imagen: string;

  @OneToMany(() => Cita, (cita) => cita.doctor)
  citas: Cita[];

  @ManyToMany(() => Especialidad, (especialidad) => especialidad.doctores)
  @JoinTable({
    name: 'doctor_especialidad',
    joinColumn: {
      name: 'id_doctor',
    },
    inverseJoinColumn: {
      name: 'id_especialidad',
    },
  })
  especialidades: Especialidad[];
}
