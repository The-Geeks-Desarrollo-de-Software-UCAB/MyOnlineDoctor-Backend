import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class BuscarPacientesService {
  constructor(private readonly repoPaciente: IRepoPaciente) {}

  async execute(): Promise<PacienteEntity[]> {
    return await this.repoPaciente.encontrarTodos();
  }
}
