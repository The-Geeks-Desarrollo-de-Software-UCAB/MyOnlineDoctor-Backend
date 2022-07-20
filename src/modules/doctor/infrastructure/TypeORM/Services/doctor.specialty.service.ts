import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from '../Entities/doctor.entity';
import { Especialidad } from '../Entities/specialty.entity';
import { DoctorBaseService } from './doctor.base.service';

@Injectable()
export class DoctorSpecialtyService implements DoctorBaseService {
  constructor(
    @InjectRepository(Doctor) private doctorRepo: Repository<Doctor>,
    @InjectRepository(Especialidad)
    private specialtyRepo: Repository<Especialidad>,
  ) {}

  getRepository(): Repository<Doctor> {
    return this.doctorRepo;
  }

  findAll(): Promise<Doctor[]> {
    return this.getRepository().find({ relations: { especialidades: true } });
  }

  async findBy(by: number): Promise<Doctor[]> {
    //const especialidad = await this.specialtyRepo.findBy({ id_specialty: by }); en el caso de que no queramos mandar error se usa esta
    const especialidad = await this.specialtyRepo.findOneByOrFail({
      id_especialidad: by,
    });
    let resultado = await this.getRepository().find({
      where: { especialidades: especialidad },
      relations: { especialidades: true },
    });
    return resultado;
  }
}
