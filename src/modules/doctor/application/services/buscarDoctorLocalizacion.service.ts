import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BuscarDoctorLocalizacionService {
  constructor(private readonly repoDoctor: IRepoDoctor) {}

  async execute(latitud: number, longitud: number): Promise<DoctorEntity[]> {
    return await this.repoDoctor.encontrarPorLocalizacion(latitud, longitud);
  }
}