import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class BloquearPacienteService {
  constructor(
    private readonly repoPaciente: IRepoPaciente,
    private readonly repoDoctor: IRepoDoctor,
  ) {}

  async execute(
    id_doctor: string,
    id_paciente: string,
    razon: string,
  ): Promise<PacienteEntity> {
    //Buscamos al paciente a suspender
    let paciente = await this.repoPaciente.encontrarPorID(id_paciente);
    //Verificamos que el doctor exista
    const doctor = await this.repoDoctor.encontrarPorId(id_doctor);
    //seria bueno validar que el paciente si sea paciente del doctor
    //se bloquea al paciente poniendo la razon del bloqueo
    paciente.bloquearSuscripcion(razon);
    return await this.repoPaciente.guardarPaciente(paciente);
  }
}
