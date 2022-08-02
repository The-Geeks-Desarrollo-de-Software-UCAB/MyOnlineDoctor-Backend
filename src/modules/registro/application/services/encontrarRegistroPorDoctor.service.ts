import { IRepoRegistro } from 'src/modules/registro/application/IRepoRegistro.repository';
import { RegistroEntity } from '../../domain/entities/registro';

export class EncontrarRegistroPorDoctorService {
  constructor(private readonly repoRegistro: IRepoRegistro) {}

  async execute(id_doctor: string): Promise<RegistroEntity[]> {
    return await this.repoRegistro.encontrarPorDoctor(id_doctor);
  }
}
