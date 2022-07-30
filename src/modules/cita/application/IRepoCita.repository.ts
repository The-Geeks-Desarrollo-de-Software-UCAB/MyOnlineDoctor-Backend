import { IdDoctor } from 'src/modules/doctor/domain/value-objects/idDoctor.value-object';
import { IdPaciente } from 'src/modules/paciente/domain/value-objects/idPaciente.value-object';
import { CitaEntity } from '../domain/entities/cita.entity';

export interface IRepoCita {
  encontrarTodas(): Promise<CitaEntity[]>;

  encontrarPorDoctor(id_doctor: IdDoctor): Promise<CitaEntity[]>;

  encontrarPorPaciente(id_paciente: IdPaciente): Promise<CitaEntity[]>;

  encontrarPorDoctorYEstado(
    id_doctor: IdDoctor,
    estado: string,
  ): Promise<CitaEntity[]>;

  encontrarPorPacienteYEstado(
    id_paciente: IdPaciente,
    estado: string,
  ): Promise<CitaEntity[]>;

  guardarCita(cita: CitaEntity): Promise<CitaEntity>;
}
