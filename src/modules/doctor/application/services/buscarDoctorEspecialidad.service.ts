import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BuscarDoctorEspecialidadService {
  constructor(private readonly repoDoctor: IRepoDoctor) {}

  async execute(especialidad: number): Promise<DoctorEntity[]> {
    return await this.repoDoctor.encontrarPorEspecialidad(especialidad);
  }
}