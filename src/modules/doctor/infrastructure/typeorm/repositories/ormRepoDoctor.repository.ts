import { EntityRepository, Repository, getRepository } from 'typeorm';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { DoctorOrmMapper } from '../../doctor.orm-mapper';
import { decoLog } from 'src/modules/decorators/logging-decorator';
import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from 'src/modules/doctor/domain/entities/doctor';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/entities/specialty.entity';

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

  async encontrarPorEspecialidad(
    id_especialidad: number,
  ): Promise<DoctorEntity[]> {
    const especialidad = await this.especialidadRepo.findOne({
      where: { id_especialidad: id_especialidad },
    });
    const query = await this.createQueryBuilder('d')
      .leftJoin('d.especialidades', 's')
      .select(['d', 's'])
      .where('s.nombre = :nombreEspecialidad', {
        nombreEspecialidad: especialidad.nombre,
      })
      .getMany();
    return await this.mapper.toDomainMulti(query);
  }
}
