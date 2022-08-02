import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class BuscarPacienteNumeroService {
  constructor(private readonly repoPaciente: IRepoPaciente) {}

  async execute(numero: string): Promise<PacienteEntity> {
    return await this.repoPaciente.encontrarPorNumero(numero);
  }
}
