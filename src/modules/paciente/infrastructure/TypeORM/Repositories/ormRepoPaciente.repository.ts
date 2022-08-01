import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';
import { PacienteOrmMapper } from '../../paciente.orm-mapper';
import { decoLog } from 'src/modules/decorators/logging-decorator';
import { PacienteEntity } from 'src/modules/paciente/domain/entities/paciente';

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

  async encontrarPorID(id_paciente: string): Promise<PacienteEntity> {
    let paciente = await super.findOne({
      where: { id_paciente: id_paciente },
    });
    return await this.mapper.toDomain(paciente);
  }


  async encontrarPorNombre(nombre: string): Promise<PacienteEntity[]> {
    let pacientes = await super.find({
      where: { primerNombre: nombre },
    });
    return await this.mapper.toDomainMulti(pacientes);
  }

  async encontrarPorSegundoNombre(segundonombre: string): Promise<PacienteEntity[]> {
    let pacientes = await super.find({
      where: { segundoNombre: segundonombre },
    });
    return await this.mapper.toDomainMulti(pacientes);
  }

  async encontrarPorApellido(apellido: string): Promise<PacienteEntity[]> {
    let pacientes = await super.find({
      where: { primerApellido: apellido },
    });
    return await this.mapper.toDomainMulti(pacientes);
  }

  async encontrarPorSegundoApellido(segundoapellido: string): Promise<PacienteEntity[]> {
    let pacientes = await super.find({
      where: { segundoApellido: segundoapellido },
    });
    return await this.mapper.toDomainMulti(pacientes);
  }

  async encontrarPorNumero(numero: string): Promise<PacienteEntity> {
    let paciente = await super.findOne({
      where: { numeroMovil: numero },
    });
    return await this.mapper.toDomain(paciente);
  }

  

  async guardarPaciente(paciente: PacienteEntity): Promise<PacienteEntity> {
    let pacienteOrm = await this.mapper.toInfrastructure(paciente);
    let salvada = await this.save(pacienteOrm);
    return await this.mapper.toDomain(salvada);
  }
}
