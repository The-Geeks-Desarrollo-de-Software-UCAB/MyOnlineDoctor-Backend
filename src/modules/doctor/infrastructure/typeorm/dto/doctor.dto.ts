import { DoctorEntity } from 'src/modules/doctor/domain/entities/doctor';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { getRepository, Repository } from 'typeorm';

export class DoctorDto {
  constructor(
    private doctor: DoctorEntity,
    private genero: string,
    private imagen: string,
  ) {
    this.doctor = doctor;
    this.genero = genero;
    this.imagen = imagen;
  }

  static async create(doctores: DoctorEntity[]): Promise<DoctorDto[]> {
    let resultado: DoctorDto[] = [];
    const doctorRepo = getRepository(Doctor);
    for await (let doctor of doctores) {
      let doctorOrm = await doctorRepo.findOne({
        where: { id_doctor: doctor.id.id },
      });
      resultado.push(new DoctorDto(doctor, doctorOrm.genero, doctorOrm.imagen));
    }
    return resultado;
  }
}
