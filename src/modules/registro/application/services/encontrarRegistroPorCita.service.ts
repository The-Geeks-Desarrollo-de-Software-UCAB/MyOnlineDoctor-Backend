import { IRepoRegistro } from 'src/modules/registro/application/IRepoRegistro.repository';
import { RegistroEntity } from '../../domain/entities/registro';

export class EncontrarRegistroPorCitaService {
  constructor(private readonly repoRegistro: IRepoRegistro) {}

  async execute(id_cita: string): Promise<RegistroEntity> {
    return await this.repoRegistro.encontrarPorCita(id_cita);
  }
}
