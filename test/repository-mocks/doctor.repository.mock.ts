import { IRepoDoctor } from '../../src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../src/modules/doctor/domain/entities/doctor';

export class RepoDoctorMock implements IRepoDoctor {

  private readonly doctores: DoctorEntity[] = [];

  async encontrarTodos(): Promise<DoctorEntity[]> {
    return this.doctores;
  }

  async encontrarPorId(id_doctor: string): Promise<DoctorEntity> {
    for (let doctor of this.doctores) {
        if (doctor.id.id === id_doctor) {
            return doctor;
        }
    }
  }

  async encontrarPorEspecialidad(
    id_especialidad: number,
  ): Promise<DoctorEntity[]> {
    return null;
  }

  async encontrarPorNombre(nombre: string): Promise<DoctorEntity[]> {
    return null;
  }

  async encontrarPorSegundoNombre(
    segundoNombre: string,
  ): Promise<DoctorEntity[]> {
    return null;
  }

  async encontrarPorApellido(apellido: string): Promise<DoctorEntity[]> {
    return null;
  }

  async encontrarPorSegundoApellido(
    segundoapellido: string,
  ): Promise<DoctorEntity[]> {
    return null;
  }

  async encontrarPorLocalizacion(
    latitud: number,
    longitud: number,
  ): Promise<DoctorEntity[]> {
    return null;
  }

  async guardarDoctor(doctor: DoctorEntity): Promise<DoctorEntity> {
    this.doctores.push(doctor);
    return doctor;
  }

  async encontrarPorNombreEspecialidad(
    nombre_especialidad: string,
  ): Promise<DoctorEntity[]> {
    return null;
  }

  async encontrarTodosOrdenarPorPromedioCalificacion(): Promise<DoctorEntity[]> {
    return null;
  }
}