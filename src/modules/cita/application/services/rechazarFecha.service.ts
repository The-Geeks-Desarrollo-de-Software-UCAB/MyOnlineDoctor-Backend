import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { CitaEntity } from '../../domain/entities/cita';
import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';

export class RechazarFechaCitaService {
  constructor(
    private readonly repoCita: IRepoCita,
    private readonly repoPaciente: IRepoPaciente, //esto debe cambiarse por el repositorio final de paciente
  ) {}

  async execute(id_paciente: string, id_cita: string): Promise<CitaEntity> {
    //buscamos al paciente y si no existe se genera error
    const paciente = await this.repoPaciente.encontrarPorID(id_paciente);
    //se busca la cita
    let cita = await this.repoCita.encontrarPorId(id_cita);
    //se busca al paciente que solicito la cita
    const pacienteC = await this.repoPaciente.encontrarPorID(id_paciente);
    //Se valida que el paciente que solicito la cita es quien rechaza la fecha
    if (!(paciente.idPaciente.id == pacienteC.idPaciente.id)) {
      throw new Error(
        'Las fechas de las citas solo pueden ser rechazadas por el Paciente que la solicito',
      );
    }
    //se rechaza la fecha de la cita
    cita.rechazar();
    return await this.repoCita.guardarCita(cita);
  }
}
