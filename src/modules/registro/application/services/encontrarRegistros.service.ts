import { IRepoRegistro } from 'src/modules/registro/application/IRepoRegistro.repository';
import { RegistroEntity } from '../../domain/entities/registro';

export class EncontrarRegistrosService {
  constructor(private readonly repoRegistro: IRepoRegistro) {}

  async execute(): Promise<RegistroEntity[]> {
    return await this.repoRegistro.encontrarTodos();
  }
}
