import { DoctorEntity } from '../domain/entities/doctor.entity';

export interface IRepoDoctor {
  encontrarTodos(): Promise<DoctorEntity[]>;

  encontrarPorId(id_doctor: string): Promise<DoctorEntity>;

  encontrarPorEspecialidad(id_especialidad: number): Promise<DoctorEntity[]>;
}
