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
import { Cita } from 'src/modules/cita/infrastructure/typeorm/entities/cita.entity';
import { Registro } from 'src/modules/registro/infrastructure/typeorm/entities/registro.entity';

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

  @Column()
  longitud: number;

  @Column()
  latitud: number;

  @Column()
  estado: string;

  @Column({ nullable: true })
  promedioCalificacion: number;

  @Column({ nullable: true })
  imagen: string;

  @OneToMany(() => Cita, (cita) => cita.doctor)
  citas: Cita[];

  @OneToMany(() => Registro, (registro) => registro.doctor)
  registros: Registro[];

  @JoinTable({
    name: 'doctor_especialidad',
    joinColumn: {
      name: 'id_doctor',
    },
    inverseJoinColumn: {
      name: 'id_especialidad',
    },
  })
  @ManyToMany(() => Especialidad, (especialidad) => especialidad.nombre)
  especialidades: Especialidad[];
}
