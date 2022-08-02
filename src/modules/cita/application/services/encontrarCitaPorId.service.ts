import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { CitaEntity } from '../../domain/entities/cita';

export class EncontrarCitaPorIdService {
  constructor(private readonly repoCita: IRepoCita) {}

  async execute(id_cita: string): Promise<CitaEntity> {
    return await this.repoCita.encontrarPorId(id_cita);
  }
}
