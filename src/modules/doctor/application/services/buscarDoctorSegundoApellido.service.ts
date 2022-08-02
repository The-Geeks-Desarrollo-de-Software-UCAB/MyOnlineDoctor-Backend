import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BuscarDoctorSegundoApellidoService {
  constructor(private readonly repoDoctor: IRepoDoctor) {}

  async execute(segundoApellido: string): Promise<DoctorEntity[]> {
    return await this.repoDoctor.encontrarPorSegundoApellido(segundoApellido);
  }
}