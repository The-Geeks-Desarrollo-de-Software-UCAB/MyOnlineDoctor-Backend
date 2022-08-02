import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BuscarDoctorApellidoService {
  constructor(private readonly repoDoctor: IRepoDoctor) {}

  async execute(primerApellido: string): Promise<DoctorEntity[]> {
    return await this.repoDoctor.encontrarPorApellido(primerApellido);
  }
}