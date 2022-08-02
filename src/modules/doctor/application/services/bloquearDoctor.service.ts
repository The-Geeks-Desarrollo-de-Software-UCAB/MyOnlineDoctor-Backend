import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BloquearDoctorService {
  constructor(private readonly repoDoctor: IRepoDoctor) {}

  async execute(id_doctor: string, razon: string): Promise<DoctorEntity> {
    //Buscamos al doctor a suspender
    let doctor = await this.repoDoctor.encontrarPorId(id_doctor);

    //se bloquea al doctor poniendo la razon del bloqueo
    doctor.bloquear(razon);
    return await this.repoDoctor.guardarDoctor(doctor);
  }
}
