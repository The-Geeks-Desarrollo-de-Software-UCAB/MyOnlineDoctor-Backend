import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BuscarDoctorPorIdService {
  constructor(private readonly repoDoctor: IRepoDoctor) {}

  async execute(id_doctor: string): Promise<DoctorEntity> {
    return await this.repoDoctor.encontrarPorId(id_doctor);
  }
}
