import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BuscarDoctorNombreService {
  constructor(private readonly repoDoctor: IRepoDoctor) {}

  async execute(nombre: string): Promise<DoctorEntity[]> {
    return await this.repoDoctor.encontrarPorNombre(nombre);
  }
}