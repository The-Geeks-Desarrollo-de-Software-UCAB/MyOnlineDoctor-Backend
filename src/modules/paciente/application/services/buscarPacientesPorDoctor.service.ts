import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class EncontrarPacientesPorDoctorService {
  constructor(private readonly repoPaciente: IRepoPaciente) {}

  async execute(id_doctor: string): Promise<PacienteEntity[]> {
    return await this.repoPaciente.encontrarPorNombre(id_doctor);
  }
}
