import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { CitaEntity } from '../../domain/entities/cita.entity';

export class EncontrarCitaPorPacienteYEstadoService {
  constructor(private readonly repoCita: IRepoCita) {}

  async execute(id_paciente: string, estado: string): Promise<CitaEntity[]> {
    return await this.repoCita.encontrarPorPacienteYEstado(id_paciente, estado);
  }
}
