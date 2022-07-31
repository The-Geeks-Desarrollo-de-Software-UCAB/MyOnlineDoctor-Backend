import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { CitaEntity } from '../../domain/entities/cita.entity';

export class EncontrarCitaPorPacienteService {
  constructor(private readonly repoCita: IRepoCita) {}

  async execute(id_paciente: string): Promise<CitaEntity[]> {
    return await this.repoCita.encontrarPorPaciente(id_paciente);
  }
}
