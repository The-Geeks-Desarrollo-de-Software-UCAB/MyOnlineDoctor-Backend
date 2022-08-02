import { RegistroEntity } from '../domain/entities/registro';

export interface IRepoRegistro {
  encontrarTodos(): Promise<RegistroEntity[]>;

  encontrarPorId(id_registro: string): Promise<RegistroEntity>;

  encontrarPorCita(id_cita: string): Promise<RegistroEntity>;

  encontrarPorDoctor(id_doctor: string): Promise<RegistroEntity[]>;

  encontrarPorPaciente(id_paciente: string): Promise<RegistroEntity[]>;

  guardarRegistro(registro: RegistroEntity): Promise<RegistroEntity>;
}
