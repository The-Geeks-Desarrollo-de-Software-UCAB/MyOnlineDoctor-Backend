import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class BuscarPacienteNombreService {
  constructor(private readonly repoPaciente: IRepoPaciente) {}

  async execute(nombre: string): Promise<PacienteEntity[]> {
    return await this.repoPaciente.encontrarPorNombre(nombre);
  }
}
