import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { NotificacionService } from 'src/modules/notificaciones/infrastructure/typeorm/service/notificacion.service';
import { CitaEntity } from '../../domain/entities/cita';

export class CancelarCitaDoctorService {
  constructor(
    private readonly repoCita: IRepoCita,
    private readonly repoDoctor: IRepoDoctor,
    private readonly notificacionService: NotificacionService
  ) {}

  async execute(id_doctor: string, id_cita: string): Promise<CitaEntity> {
    //buscamos al doctor solicitado y si no existe se genera error
    const doctor = await this.repoDoctor.encontrarPorId(id_doctor);
    //se busca la cita
    let cita = await this.repoCita.encontrarPorId(id_cita);
    //se busca al doctor solicitado en la cita
    const doctorC = await this.repoDoctor.encontrarPorId(
      cita.identificadorDoctor,
    );
    //Se valida que el doctor solicitado es quien cancela la cita
    if (!(doctor.id.id == doctorC.id.id)) {
      throw new Error(
        'Las citas solo pueden ser canceladas por el Doctor que las atendera',
      );
    }
    //se cancela la cita
    cita.cancelar();
    this.notificacionService.enviarNotificacionPaciente("CITA CANCELADA", "EL DOCTOR CANCELÓ SU CITA", cita.identificadorPaciente);
    return await this.repoCita.guardarCita(cita);
  }
}
