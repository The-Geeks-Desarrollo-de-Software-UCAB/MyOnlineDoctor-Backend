import { IdPaciente } from 'src/modules/paciente/domain/value-objects/idPaciente.value-object';
import { PacienteEntity } from '../domain/entities/paciente.entity';

export interface IRepoPaciente {
  encontrarTodos(): Promise<PacienteEntity[]>;

  encontrarPorID(id_paciente: IdPaciente): Promise<PacienteEntity[]>;

  encontrarPorNombre(nombre: string): Promise<PacienteEntity[]>;

  //no se si esto va
  //suspenderPaciente(id_paciente: IdPaciente): Promise<PacienteEntity[]>;

  guardarPaciente(paciente: PacienteEntity): Promise<PacienteEntity>;
}
