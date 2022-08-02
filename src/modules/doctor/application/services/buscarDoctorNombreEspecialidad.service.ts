import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BuscarDoctorNombreEspecialidadService {
  constructor(private readonly repoDoctor: IRepoDoctor) {}

  async execute(especialidad: string): Promise<DoctorEntity[]> {
    return await this.repoDoctor.encontrarPorNombreEspecialidad(especialidad);
  }
}