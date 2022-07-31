import { PacienteEntity } from '../domain/entities/paciente';

export interface IRepoPaciente {
  encontrarTodos(): Promise<PacienteEntity[]>;

  encontrarPorID(id_paciente: string): Promise<PacienteEntity[]>;

  encontrarPorNombre(nombre: string): Promise<PacienteEntity[]>;

  //no se si esto va
  //suspenderPaciente(id_paciente: IdPaciente): Promise<PacienteEntity[]>;

  guardarPaciente(paciente: PacienteEntity): Promise<PacienteEntity>;
}
