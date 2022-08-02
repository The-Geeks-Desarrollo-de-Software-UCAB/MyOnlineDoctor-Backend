import { IRepoRegistro } from 'src/modules/registro/application/IRepoRegistro.repository';
import { RegistroEntity } from '../../domain/entities/registro';

export class EncontrarRegistroPorPacienteService {
  constructor(private readonly repoRegistro: IRepoRegistro) {}

  async execute(id_paciente: string): Promise<RegistroEntity[]> {
    return await this.repoRegistro.encontrarPorPaciente(id_paciente);
  }
}
