import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BuscarDoctorUsuarioService {
  constructor(private readonly repoDoctor: IRepoDoctor) {}

  async execute(correo: string): Promise<DoctorEntity> {
    return await this.repoDoctor.encontrarPorUsuario(correo);
  }
}