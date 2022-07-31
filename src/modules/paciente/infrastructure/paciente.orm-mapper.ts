import { InjectRepository } from '@nestjs/typeorm';
import { PacienteEntity } from '../domain/entities/paciente';
import { Nombre } from '../domain/value-objects/nombre.value-object';
import { Correo } from '../domain/value-objects/correo.value-object';
import { Apellido } from '../domain/value-objects/apellido.value-object';
import { Alergia } from '../domain/value-objects/alergia.value-object';
import { Altura } from '../domain/value-objects/altura.value-object';
import { Antecedente } from '../domain/value-objects/antecedente.value-object';
import { EstadoSuscripcion } from '../domain/value-objects/estadosuscripcion.value-object';
import { FechaNacimiento } from '../domain/value-objects/fechanacimiento.value-object';
import { Genero } from '../domain/value-objects/genero.value-object';
import { NumeroMovil } from '../domain/value-objects/numeromovil.value-object';
import { Operacion } from '../domain/value-objects/operacion.value-object';
import { Password } from '../domain/value-objects/password.value-object';
import { Peso } from '../domain/value-objects/peso.value-object';
import { IdPaciente } from '../domain/value-objects/idPaciente.value-object';
import { Paciente } from './typeorm/entities/paciente.entity';
import { getCustomRepository, getRepository, Repository } from 'typeorm';

export class PacienteOrmMapper {
  constructor() {}

  public async toDomain(paciente: Paciente): Promise<PacienteEntity> {
    const pacienteEntity = await new PacienteEntity(
      new IdPaciente(paciente.id_paciente),
      new Correo(paciente.correo),
      new Nombre(paciente.primerNombre, paciente.segundoNombre),
      new Apellido(paciente.primerApellido, paciente.segundoApellido),
      new Alergia(paciente.alergia),
      new Altura(paciente.altura),
      new Antecedente(paciente.antecedente),
      new FechaNacimiento(paciente.fechaNacimiento),
      new Genero(paciente.genero),
      new NumeroMovil(paciente.numeroMovil),
      new Operacion(paciente.operacion),
      new Password(paciente.contrasena),
      new Peso(paciente.peso),
      EstadoSuscripcion[paciente.estadoSuscripcion],
    );
    pacienteEntity.limpiarEventos();
    return pacienteEntity;
  }

  public async toDomainMulti(pacientes: Paciente[]): Promise<PacienteEntity[]> {
    const resultado: PacienteEntity[] = [];
    for await (let paciente of pacientes) {
      resultado.push(await this.toDomain(paciente));
    }
    return resultado;
  }

  //ARREGLAR
  public async toInfrastructure(paciente: PacienteEntity): Promise<Paciente> {
    return;
  }
}
