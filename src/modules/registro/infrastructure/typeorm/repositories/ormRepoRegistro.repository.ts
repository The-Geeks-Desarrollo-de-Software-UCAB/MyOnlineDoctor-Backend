import { IRepoRegistro } from 'src/modules/registro/application/IRepoRegistro.repository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/entities/cita.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { Registro } from '../entities/registro.entity';
import { RegistroEntity } from 'src/modules/registro/domain/entities/registro';
import { RegistroOrmMapper } from '../registro.orm-mapper';
import { decoLog } from 'src/modules/decorators/logging-decorator';

@EntityRepository(Registro)
export class OrmRepoRegistro
  extends Repository<Registro>
  implements IRepoRegistro
{
  citaRepo = getRepository(Cita);
  doctorRepo = getRepository(Doctor);
  pacienteRepo = getRepository(Paciente);
  mapper = new RegistroOrmMapper();

  async encontrarTodos(): Promise<RegistroEntity[]> {
    let registros = await super.find({
      relations: ['cita', 'doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(registros);
  }

  async encontrarPorId(id_registro: string): Promise<RegistroEntity> {
    let registro = await super.findOne({
      where: { id_registro: id_registro },
      relations: ['cita', 'doctor', 'paciente'],
    });
    return await this.mapper.toDomain(registro);
  }

  async encontrarPorCita(id_cita: string): Promise<RegistroEntity> {
    let cita = await this.citaRepo.findOne({
      where: { id_cita: id_cita },
      relations: ['doctor', 'paciente'],
    });
    let registro = await super.findOne({
      where: { cita: cita },
      relations: ['cita', 'doctor', 'paciente'],
    });
    return await this.mapper.toDomain(registro);
  }

  async encontrarPorDoctor(id_doctor: string): Promise<RegistroEntity[]> {
    const doctor = await this.doctorRepo.findOneOrFail({
      where: { id_doctor: id_doctor },
    });
    let registros = await super.find({
      where: { doctor: doctor },
      relations: ['cita', 'doctor', 'paciente'],
      order: { fecha: 'DESC' },
    });
    return await this.mapper.toDomainMulti(registros);
  }

  async encontrarPorPaciente(id_paciente: string): Promise<RegistroEntity[]> {
    const paciente = await this.pacienteRepo.findOneOrFail({
      where: { id_paciente: id_paciente },
    });
    let registros = await super.find({
      where: { paciente: paciente },
      relations: ['cita', 'doctor', 'paciente'],
    });
    return await this.mapper.toDomainMulti(registros);
  }

  async guardarRegistro(registro: RegistroEntity): Promise<RegistroEntity> {
    let registroOrm = await this.mapper.toInfrastructure(registro);
    let salvado = await this.save(registroOrm);
    return await this.mapper.toDomain(salvado);
  }
}
