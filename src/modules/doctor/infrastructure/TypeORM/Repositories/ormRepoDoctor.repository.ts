import { EntityRepository, Repository, getRepository } from 'typeorm';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/Entities/doctor.entity';
import { DoctorOrmMapper } from '../../doctor.orm-mapper';
import { decoLog } from 'src/modules/decorators/logging-decorator';
import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from 'src/modules/doctor/domain/entities/doctor.entity';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/Entities/specialty.entity';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(Doctor)
export class OrmRepoDoctor extends Repository<Doctor> implements IRepoDoctor {
  private readonly especialidadRepo: Repository<Especialidad> =
    getRepository(Especialidad);
  mapper = new DoctorOrmMapper();

  async encontrarTodos(): Promise<DoctorEntity[]> {
    let doctores = await super.find({
      relations: ['especialidades'],
    });
    return await this.mapper.toDomainMulti(doctores);
  }

  async encontrarPorId(id_doctor: string): Promise<DoctorEntity> {
    let doctor = await super.findOne({
      where: { id_doctor: id_doctor },
      relations: ['especialidades'],
    });
    return await this.mapper.toDomain(doctor);
  }

  //no sirve
  async encontrarPorEspecialidad(
    id_especialidad: number,
  ): Promise<DoctorEntity[]> {
    const especialidad = await this.especialidadRepo.find({
      where: { id_especialidad: id_especialidad },
    });
    let doctores = await super.find({
      where: { especialidades: especialidad },
      relations: ['especialidades'],
    });
    return await this.mapper.toDomainMulti(doctores);
  }
}
