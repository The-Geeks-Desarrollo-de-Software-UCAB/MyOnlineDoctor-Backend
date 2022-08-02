import { CitaEntity } from '../domain/entities/cita';

export interface IRepoCita {
  encontrarTodas(): Promise<CitaEntity[]>;

  encontrarPorId(id_cita: string): Promise<CitaEntity>;

  encontrarPorDoctor(id_doctor: string): Promise<CitaEntity[]>;

  encontrarPorPaciente(id_paciente: string): Promise<CitaEntity[]>;

  encontrarPorDoctorYEstado(
    id_doctor: string,
    estado: string,
  ): Promise<CitaEntity[]>;

  encontrarPorPacienteYEstado(
    id_paciente: string,
    estado: string,
  ): Promise<CitaEntity[]>;

  guardarCita(cita: CitaEntity): Promise<CitaEntity>;
}
