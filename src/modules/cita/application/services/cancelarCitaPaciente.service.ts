import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { CitaEntity } from '../../domain/entities/cita';
import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { NotificacionService } from 'src/modules/notificaciones/infrastructure/typeorm/service/notificacion.service';

export class CancelarCitaPacienteService {
  constructor(
    private readonly repoCita: IRepoCita,
    private readonly repoPaciente: IRepoPaciente,
    private readonly notificacionService: NotificacionService, //esto debe cambiarse por el repositorio final de paciente
  ) {}

  async execute(id_paciente: string, id_cita: string): Promise<CitaEntity> {
    //buscamos al paciente y si no existe se genera error
    const paciente = await this.repoPaciente.encontrarPorID(id_paciente);
    //se busca la cita
    let cita = await this.repoCita.encontrarPorId(id_cita);
    //se busca al paciente que solicito la cita
    const pacienteC = await this.repoPaciente.encontrarPorID(id_paciente);
    //Se valida que el paciente que solicito la cita es quien cancela la cita
    if (!(paciente.idPaciente.id == pacienteC.idPaciente.id)) {
      throw new Error(
        'Las fechas de las citas solo pueden ser canceladas por el Paciente que la solicito',
      );
    }
    //se cancela la cita
    cita.cancelar();
    this.notificacionService.enviarNotificacionPaciente("CITA CANCELADA", "La cita fue cancelada", id_paciente);
    return await this.repoCita.guardarCita(cita);
  }
}
