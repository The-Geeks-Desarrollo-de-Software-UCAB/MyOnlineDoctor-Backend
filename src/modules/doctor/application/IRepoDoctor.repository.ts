import { DoctorEntity } from '../domain/entities/doctor';

export interface IRepoDoctor {
  encontrarTodos(): Promise<DoctorEntity[]>;

  encontrarPorId(id_doctor: string): Promise<DoctorEntity>;

  encontrarPorEspecialidad(id_especialidad: number): Promise<DoctorEntity[]>;

  encontrarPorNombre(nombre: string): Promise<DoctorEntity[]>;

  encontrarPorSegundoNombre(segundoNombre: string): Promise<DoctorEntity[]>;

  encontrarPorApellido(apellido: string): Promise<DoctorEntity[]>;

  encontrarPorSegundoApellido(segundoApellido: string): Promise<DoctorEntity[]>;

  encontrarPorLocalizacion(
    latitud: number,
    longitud: number,
  ): Promise<DoctorEntity[]>;

  guardarDoctor(doctor: DoctorEntity): Promise<DoctorEntity>;

  encontrarPorNombreEspecialidad(
    nombreespecialidad: string,
  ): Promise<DoctorEntity[]>;

  encontrarTodosOrdenarPorPromedioCalificacion(): Promise<DoctorEntity[]>;

  encontrarPorUsuario(usuario: string): Promise<DoctorEntity>;
}
