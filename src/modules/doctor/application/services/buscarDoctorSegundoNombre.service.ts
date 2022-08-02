import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BuscarDoctorSegundoNombreService {
  constructor(private readonly repoDoctor: IRepoDoctor) {}

  async execute(segundonombre: string): Promise<DoctorEntity[]> {
    return await this.repoDoctor.encontrarPorSegundoNombre(segundonombre);
  }
}