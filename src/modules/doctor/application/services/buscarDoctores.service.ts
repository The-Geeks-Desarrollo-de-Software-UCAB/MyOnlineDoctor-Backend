import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BuscarDoctoresService {
  constructor(private readonly repoDoctor: IRepoDoctor) {}

  async execute(): Promise<DoctorEntity[]> {
    return await this.repoDoctor.encontrarTodos();
  }
}
