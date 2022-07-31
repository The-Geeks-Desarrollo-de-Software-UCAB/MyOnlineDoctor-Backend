import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { CitaEntity } from '../../domain/entities/cita.entity';

export class EncontrarCitaPorDoctorService {
  constructor(private readonly repoCita: IRepoCita) {}

  async execute(id_doctor: string): Promise<CitaEntity[]> {
    return await this.repoCita.encontrarPorDoctor(id_doctor);
  }
}
