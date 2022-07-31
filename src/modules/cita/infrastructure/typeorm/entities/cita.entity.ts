import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Cita {
  @PrimaryColumn()
  id_cita: string;

  @Column({ nullable: true })
  fecha: Date;

  @Column()
  duracion: number;

  @Column()
  tipoCita: string;

  @Column()
  estadoCita: string;

  @Column()
  motivo: string;

  @ManyToOne(() => Doctor, (doctor) => doctor.citas)
  @JoinColumn({ name: 'doctor' })
  doctor: Doctor;

  @ManyToOne(() => Paciente, (paciente) => paciente.citas)
  @JoinColumn({ name: 'paciente' })
  paciente: Paciente;

  @Column({ nullable: true })
  calificacion: number;
}
