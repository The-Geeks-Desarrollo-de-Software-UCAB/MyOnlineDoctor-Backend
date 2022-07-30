import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/Entities/cita.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/Entities/doctor.entity';
import { CitaOrmMapper } from '../../cita.orm-mapper';
import { decoLog } from 'src/modules/decorators/logging-decorator';
import { CitaEntity } from 'src/modules/cita/domain/entities/cita.entity';
import { IdDoctor } from 'src/modules/doctor/domain/value-objects/idDoctor.value-object';
import { IdPaciente } from 'src/modules/paciente/domain/value-objects/idPaciente.value-object';

@EntityRepository(Cita)
export class OrmRepoCita extends Repository<Cita> implements IRepoCita {
  doctorRepo = getRepository(Doctor);
  pacienteRepo = getRepository(Paciente);
  mapper = new CitaOrmMapper();

  async encontrarTodas(): Promise<CitaEntity[]> {
    let citas = await super.find({
      relations: ['doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(citas);
  }

  async encontrarPorDoctor(id_doctor: IdDoctor): Promise<CitaEntity[]> {
    const doctorOrm = await this.doctorRepo.findOneOrFail({
      where: { id_doctor: id_doctor.id },
    });
    let citas = await super.find({
      where: { doctor: doctorOrm },
      relations: ['doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(citas);
  }

  async encontrarPorPaciente(id_paciente: IdPaciente): Promise<CitaEntity[]> {
    const pacienteOrm = await this.pacienteRepo.findOneOrFail({
      where: { id_doctor: id_paciente.id },
    });
    let citas = await super.find({
      where: { paciente: pacienteOrm },
      relations: ['doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(citas);
  }

  async encontrarPorDoctorYEstado(
    id_doctor: IdDoctor,
    estado: string,
  ): Promise<CitaEntity[]> {
    const doctorOrm = await this.doctorRepo.findOneOrFail({
      where: { id_doctor: id_doctor.id },
    });
    let citas = await super.find({
      where: { doctor: doctorOrm, estadoCita: estado },
      relations: ['doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(citas);
  }

  async encontrarPorPacienteYEstado(
    id_paciente: IdPaciente,
    estado: string,
  ): Promise<CitaEntity[]> {
    const pacienteOrm = await this.pacienteRepo.findOneOrFail({
      where: { id_doctor: id_paciente.id },
    });
    let citas = await super.find({
      where: { paciente: pacienteOrm, estadoCita: estado },
      relations: ['doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(citas);
  }

  async guardarCita(cita: CitaEntity): Promise<CitaEntity> {
    let citaOrm = await this.mapper.toInfrastructure(cita);
    let salvada = await this.save(citaOrm);
    return await this.mapper.toDomain(salvada);
  }
}
