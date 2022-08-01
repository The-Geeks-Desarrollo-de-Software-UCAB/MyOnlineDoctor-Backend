import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class SuspenderPacienteService    {
  constructor(
    private readonly repoPaciente: IRepoPaciente,
    
  ) {}

  async execute(id_paciente: string): Promise<PacienteEntity> {
    
    let paciente = await this.repoPaciente.encontrarPorID(id_paciente);
    
    paciente.suspenderSuscripcion();
    return await this.repoPaciente.guardarPaciente(paciente);
  }
}