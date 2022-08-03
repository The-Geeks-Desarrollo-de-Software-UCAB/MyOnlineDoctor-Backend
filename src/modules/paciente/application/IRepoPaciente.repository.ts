import { PacienteEntity } from '../domain/entities/paciente';

export interface IRepoPaciente {
  encontrarTodos(): Promise<PacienteEntity[]>;

  encontrarPorID(id_paciente: string): Promise<PacienteEntity>;

  encontrarPorNombre(nombre: string): Promise<PacienteEntity[]>;

  encontrarPorSegundoNombre(segundoNombre: string): Promise<PacienteEntity[]>;

  encontrarPorApellido(apellido: string): Promise<PacienteEntity[]>;

  encontrarPorSegundoApellido(
    segundoApellido: string,
  ): Promise<PacienteEntity[]>;

  encontrarPorNumero(numero: string): Promise<PacienteEntity>;

  encontrarPorCorreo(correo: string): Promise<PacienteEntity>;

  guardarPaciente(paciente: PacienteEntity): Promise<PacienteEntity>;
}
