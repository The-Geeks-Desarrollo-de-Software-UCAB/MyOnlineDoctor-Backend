import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class BuscarPacienteIDService  {
  constructor(private readonly repoPaciente: IRepoPaciente) {}

  async execute(id_paciente: string): Promise<PacienteEntity> {
    return await this.repoPaciente.encontrarPorID(id_paciente);
  }
}