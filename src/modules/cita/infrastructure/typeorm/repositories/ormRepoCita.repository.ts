import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import {
  EntityRepository,
  getRepository,
  Repository,
  Not,
  IsNull,
} from 'typeorm';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/entities/cita.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { CitaOrmMapper } from '../../cita.orm-mapper';
import { decoLog } from 'src/modules/decorators/logging-decorator';
import { CitaEntity } from 'src/modules/cita/domain/entities/cita';
import { PacienteEntity } from 'src/modules/paciente/domain/entities/paciente';
import { PacienteOrmMapper } from 'src/modules/paciente/infrastructure/paciente.orm-mapper';

@EntityRepository(Cita)
export class OrmRepoCita extends Repository<Cita> implements IRepoCita {
  doctorRepo = getRepository(Doctor);
  pacienteRepo = getRepository(Paciente);
  mapper = new CitaOrmMapper();
  mapperPaciente = new PacienteOrmMapper();

  async encontrarTodas(): Promise<CitaEntity[]> {
    let citas = await super.find({
      relations: ['doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(citas);
  }

  async encontrarPorId(id_cita: string): Promise<CitaEntity> {
    let cita = await super.findOne({
      where: { id_cita: id_cita },
      relations: ['doctor', 'paciente'],
    });
    return await this.mapper.toDomain(cita);
  }

  async encontrarPorDoctor(id_doctor: string): Promise<CitaEntity[]> {
    const doctorOrm = await this.doctorRepo.findOneOrFail({
      where: { id_doctor: id_doctor },
    });
    let citas = await super.find({
      where: { doctor: doctorOrm },
      relations: ['doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(citas);
  }

  async encontrarPorPaciente(id_paciente: string): Promise<CitaEntity[]> {
    const pacienteOrm = await this.pacienteRepo.findOneOrFail({
      where: { id_paciente: id_paciente },
    });
    let citas = await super.find({
      where: { paciente: pacienteOrm },
      relations: ['doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(citas);
  }

  async encontrarPorDoctorYEstado(
    id_doctor: string,
    estado: string,
  ): Promise<CitaEntity[]> {
    const doctorOrm = await this.doctorRepo.findOneOrFail({
      where: { id_doctor: id_doctor },
    });
    let citas = await super.find({
      where: { doctor: doctorOrm, estadoCita: estado },
      relations: ['doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(citas);
  }

  async encontrarPorPacienteYEstado(
    id_paciente: string,
    estado: string,
  ): Promise<CitaEntity[]> {
    const pacienteOrm = await this.pacienteRepo.findOneOrFail({
      where: { id_paciente: id_paciente },
    });
    let citas = await super.find({
      where: { paciente: pacienteOrm, estadoCita: estado },
      relations: ['doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(citas);
  }

  async encontrarPacientesPorDoctor(
    id_doctor: string,
  ): Promise<PacienteEntity[]> {
    const query = await this.createQueryBuilder('citas')
      .select('p.*')
      .leftJoin('citas.paciente', 'p')
      .where('citas.doctor = :id_doctor', { id_doctor })
      .distinctOn(['p.id_paciente'])
      .getRawMany();
    return await this.mapperPaciente.toDomainMulti(query);
  }

  async contarPorDoctor(id_doctor: string): Promise<number> {
    const doctorOrm = await this.doctorRepo.findOneOrFail({
      where: { id_doctor: id_doctor },
    });
    let citas = await super.count({
      where: { doctor: doctorOrm, calificacion: Not(IsNull()) },
      relations: ['doctor', 'paciente'],
    });
    return await citas;
  }

  async guardarCita(cita: CitaEntity): Promise<CitaEntity> {
    let citaOrm = await this.mapper.toInfrastructure(cita);
    let salvada = await this.save(citaOrm);
    return await this.mapper.toDomain(salvada);
  }
}
