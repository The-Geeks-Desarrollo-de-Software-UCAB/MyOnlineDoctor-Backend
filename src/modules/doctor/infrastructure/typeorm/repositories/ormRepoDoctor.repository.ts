import { EntityRepository, Repository, getRepository, IsNull, Not } from 'typeorm';
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

  async encontrarPorNombre(nombre: string): Promise<DoctorEntity[]> {
    let doctores = await super.find({
      where: { primerNombre: nombre },
      relations: ['especialidades'],
    });
    return await this.mapper.toDomainMulti(doctores);
  }

  async encontrarPorSegundoNombre(
    segundoNombre: string,
  ): Promise<DoctorEntity[]> {
    let doctores = await super.find({
      where: { segundoNombre: segundoNombre },
      relations: ['especialidades'],
    });
    return await this.mapper.toDomainMulti(doctores);
  }

  async encontrarPorApellido(apellido: string): Promise<DoctorEntity[]> {
    let doctores = await super.find({
      where: { primerApellido: apellido },
      relations: ['especialidades'],
    });
    return await this.mapper.toDomainMulti(doctores);
  }

  async encontrarPorSegundoApellido(
    segundoapellido: string,
  ): Promise<DoctorEntity[]> {
    let doctores = await super.find({
      where: { segundoApellido: segundoapellido },
      relations: ['especialidades'],
    });
    return await this.mapper.toDomainMulti(doctores);
  }

  async encontrarPorLocalizacion(
    latitud: number,
    longitud: number,
  ): Promise<DoctorEntity[]> {
    let doctores = await super.find({
      where: { latitud: latitud, longitud: longitud },
      relations: ['especialidades'],
    });
    return await this.mapper.toDomainMulti(doctores);
  }

  async guardarDoctor(doctor: DoctorEntity): Promise<DoctorEntity> {
    let doctorOrm = await this.mapper.toInfrastructure(doctor);
    let salvado = await this.save(doctorOrm);
    return await this.mapper.toDomain(salvado);
  }

  //DUDAS
  async encontrarPorNombreEspecialidad(
    nombre_especialidad: string,
  ): Promise<DoctorEntity[]> {
    const especialidad = await this.especialidadRepo.findOne({
      where: { nombre_especialidad: nombre_especialidad },
    });
    const query = await this.createQueryBuilder('d')
      .leftJoin('d.especialidades', 's')
      .select(['d', 's'])
      .where('s.id_especialidad = :idEspecialidad', {
        idEspecialidad: especialidad.id_especialidad,
      })
      .getMany();
    return await this.mapper.toDomainMulti(query);
  }

  async encontrarTodosOrdenarPorPromedioCalificacion(): Promise<DoctorEntity[]> {
    let doctores = await super.find({
      order: { promedioCalificacion: 'DESC' },
      where: { promedioCalificacion: Not(IsNull()) },
      relations: ['especialidades'],
    });
    return await this.mapper.toDomainMulti(doctores);
  }
}
