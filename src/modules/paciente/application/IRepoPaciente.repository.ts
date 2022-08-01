import { PacienteEntity } from '../domain/entities/paciente';

export interface IRepoPaciente {
  encontrarTodos(): Promise<PacienteEntity[]>;

  encontrarPorID(id_paciente: string): Promise<PacienteEntity>;

  encontrarPorNombre(nombre: string): Promise<PacienteEntity[]>;

  encontrarPorSegundoNombre(segundonombre: string): Promise<PacienteEntity[]>;

  encontrarPorApellido(apellido: string): Promise<PacienteEntity[]>;

  encontrarPorSegundoApellido(segundoapellido: string): Promise<PacienteEntity[]>;

  encontrarPorNumero(numero: string): Promise<PacienteEntity>;

  //no se si esto va
  //suspenderPaciente(id_paciente: IdPaciente): Promise<PacienteEntity[]>;

  guardarPaciente(paciente: PacienteEntity): Promise<PacienteEntity>;
  
}
