import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';
import { Repository } from 'typeorm';
import { CitaEntity } from '../../domain/entities/cita';

export class SolicitarCitaService {
  constructor(
    private readonly repoCita: IRepoCita,
    private readonly repoDoctor: IRepoDoctor,
    private readonly repoPaciente: Repository<Paciente>, //esto debe cambiarse por el repositorio final de paciente
  ) {}

  async execute(
    cita_id: string,
    duracion: number,
    tipo: string,
    motivo: string,
    paciente_id: string,
    doctor_id: string,
  ): Promise<CitaEntity> {
    //buscamos al doctor solicitado y si no existe se genera error
    const doctor = await this.repoDoctor.encontrarPorId(doctor_id);
    //buscamos al paciente que solicito la cita y si no existe se genera error
    const paciente = await this.repoPaciente.findOne({
      where: { id_paciente: paciente_id },
    });
    //validamos que la suscripcion del paciente este activa
    if (!(paciente.estadoSuscripcion == 'ACTIVA')) {
      throw new Error('La subscripcion de este paciente no esta activa');
    }
    let cita = CitaEntity.create(
      cita_id,
      duracion,
      tipo,
      motivo,
      paciente_id,
      doctor_id,
    );
    return await this.repoCita.guardarCita(cita);
  }
}
