import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from './doctor.entity';

@Entity()
export class Especialidad {
  @PrimaryGeneratedColumn()
  id_especialidad: number;

  @Column()
  nombre: string;
}
