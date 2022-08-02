import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class BuscarPacienteSegundoApellidoService {
  constructor(private readonly repoPaciente: IRepoPaciente) {}

  async execute(segundoApellido: string): Promise<PacienteEntity[]> {
    return await this.repoPaciente.encontrarPorSegundoApellido(segundoApellido);
  }
}
