import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { CitaEntity } from '../../domain/entities/cita';

export class EncontrarCitasService {
  constructor(private readonly repoCita: IRepoCita) {}

  async execute(): Promise<CitaEntity[]> {
    return await this.repoCita.encontrarTodas();
  }
}
