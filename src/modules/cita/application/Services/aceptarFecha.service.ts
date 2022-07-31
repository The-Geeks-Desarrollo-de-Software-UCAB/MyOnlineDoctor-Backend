import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { CitaEntity } from '../../domain/entities/cita';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';
import { Repository } from 'typeorm';

export class AceptarFechaCitaService {
  constructor(
    private readonly repoCita: IRepoCita,
    private readonly repoPaciente: Repository<Paciente>, //esto debe cambiarse por el repositorio final de paciente
  ) {}

  async execute(id_paciente: string, id_cita: string): Promise<CitaEntity> {
    //buscamos al paciente y si no existe se genera error
    const paciente = await this.repoPaciente.findOne({
      where: { id_paciente: id_paciente },
    });
    //se busca la cita
    let cita = await this.repoCita.encontrarPorId(id_cita);
    //se busca al paciente que solicito la cita
    const pacienteC = await this.repoPaciente.findOne({
      where: { id_paciente: cita.identificadorPaciente },
    });
    //Se valida que el paciente que solicito la cita es quien acepta la fecha
    if (!(paciente.id_paciente == pacienteC.id_paciente)) {
      throw new Error(
        'Las fechas de las citas solo pueden ser aceptadas por el Paciente que la solicito',
      );
    }
    //se acepta la fecha de la cita
    cita.aceptar();
    return await this.repoCita.guardarCita(cita);
  }
}
