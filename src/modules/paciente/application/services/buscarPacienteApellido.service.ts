import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class BuscarPacienteApellidoService {
  constructor(private readonly repoPaciente: IRepoPaciente) {}

  async execute(primerApellido: string): Promise<PacienteEntity[]> {
    return await this.repoPaciente.encontrarPorApellido(primerApellido);
  }
}
