import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { CitaEntity } from '../../domain/entities/cita.entity';

export class EncontrarCitaPorDoctorYEstadoService {
  constructor(private readonly repoCita: IRepoCita) {}

  async execute(id_doctor: string, estado: string): Promise<CitaEntity[]> {
    return await this.repoCita.encontrarPorDoctorYEstado(id_doctor, estado);
  }
}
