import { IRepoCita } from '../../src/modules/cita/application/IRepoCita.repository';
import { CitaEntity } from '../../src/modules/cita/domain/entities/cita';
import { PacienteEntity } from '../../src/modules/paciente/domain/entities/paciente';

export class RepoCitaMock implements IRepoCita {
  private readonly citas: CitaEntity[] = [];

  async encontrarTodas(): Promise<CitaEntity[]> {
    return this.citas;
  }

  async encontrarPorId(id_cita: string): Promise<CitaEntity> {
    for (let cita of this.citas) {
        if (cita.id === id_cita) {
            return cita;
        }
    }
  }

  async encontrarPorDoctor(id_doctor: string): Promise<CitaEntity[]> {
    return null;
  }

  async encontrarPorPaciente(id_paciente: string): Promise<CitaEntity[]> {
    return null;
  }

  async encontrarPorDoctorYEstado(
    id_doctor: string,
    estado: string,
  ): Promise<CitaEntity[]> {
    return null;
  }

  async encontrarPorPacienteYEstado(
    id_paciente: string,
    estado: string,
  ): Promise<CitaEntity[]> {
    return null;
  }

  async encontrarPacientesPorDoctor(
    id_doctor: string,
  ): Promise<PacienteEntity[]> {
    return null;
  }

  async contarPorDoctor(id_doctor: string): Promise<number> {
    return null;
  }

  async guardarCita(cita: CitaEntity): Promise<CitaEntity> {
    this.citas.push(cita);
    return cita;
  }
}
