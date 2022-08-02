import {
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/entities/cita.entity';

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

  @OneToOne(() => Cita)
  @JoinColumn({ name: 'cita' })
  cita: Cita;

  @ManyToOne(() => Doctor, (doctor) => doctor.registros)
  @JoinColumn({ name: 'doctor' })
  doctor: Doctor;

  @ManyToOne(() => Paciente, (paciente) => paciente.historiaMedica)
  @JoinColumn({ name: 'paciente' })
  paciente: Paciente;
}
