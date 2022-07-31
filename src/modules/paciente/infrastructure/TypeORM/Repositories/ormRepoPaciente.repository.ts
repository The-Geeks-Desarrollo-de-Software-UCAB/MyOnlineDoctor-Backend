import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';
import { PacienteOrmMapper } from '../../paciente.orm-mapper';
import { decoLog } from 'src/modules/decorators/logging-decorator';
import { PacienteEntity } from 'src/modules/paciente/domain/entities/paciente';
import { IdPaciente } from 'src/modules/paciente/domain/value-objects/idPaciente.value-object';

@EntityRepository(Paciente)
export class OrmRepoPaciente
  extends Repository<Paciente>
  implements IRepoPaciente
{
  mapper = new PacienteOrmMapper();

  async encontrarTodos(): Promise<PacienteEntity[]> {
    let pacientes = await super.find({});
    return await this.mapper.toDomainMulti(pacientes);
  }

  async encontrarPorID(id_paciente: IdPaciente): Promise<PacienteEntity[]> {
    let pacientes = await super.find({
      where: { id_paciente: id_paciente.id },
    });
    return await this.mapper.toDomainMulti(pacientes);
  }

  async encontrarPorNombre(nombre: string): Promise<PacienteEntity[]> {
    let pacientes = await super.find({
      where: { primerNombre: nombre },
    });
    return await this.mapper.toDomainMulti(pacientes);
  }

  //FALTA SUSPENDER PACIENTE

  async guardarPaciente(paciente: PacienteEntity): Promise<PacienteEntity> {
    let pacienteOrm = await this.mapper.toInfrastructure(paciente);
    let salvada = await this.save(pacienteOrm);
    return await this.mapper.toDomain(salvada);
  }
}
