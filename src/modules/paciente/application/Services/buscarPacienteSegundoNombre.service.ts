import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class BuscarPacienteSegundoNombreService {
  constructor(private readonly repoPaciente: IRepoPaciente) {}

  async execute(segundonombre: string): Promise<PacienteEntity[]> {
    return await this.repoPaciente.encontrarPorSegundoNombre(segundonombre);
  }
}