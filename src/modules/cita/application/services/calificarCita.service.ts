import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { CitaEntity } from '../../domain/entities/cita';
import { ActualizarCalificacionDoctorService } from 'src/modules/doctor/application/services/actualizarCalificacionDoctor.service';

export class CalificarCitaService {
  constructor(
    private readonly repoCita: IRepoCita,
    private readonly repoDoctor: IRepoDoctor,
    private readonly repoPaciente: IRepoPaciente,
  ) {}

  async execute(
    id_paciente: string,
    id_cita: string,
    calificacion: number,
  ): Promise<CitaEntity> {
    //buscamos al paciente y si no existe se genera error
    const paciente = await this.repoPaciente.encontrarPorID(id_paciente);
    //se busca la cita
    let cita = await this.repoCita.encontrarPorId(id_cita);
    //se busca al paciente que califica la cita
    const pacienteC = await this.repoPaciente.encontrarPorID(id_paciente);
    //Se valida que el paciente que solicito la cita es quien califica la cita
    if (!(paciente.idPaciente.id == pacienteC.idPaciente.id)) {
      throw new Error(
        'Las fechas de las citas solo pueden ser calificadas por el Paciente que la solicito',
      );
    }
    //se califica la cita
    cita.calificar(calificacion);
    //se actualiza la calificacion promedio del doctor
    const actualizarCalificacionPromedio =
      new ActualizarCalificacionDoctorService(this.repoCita, this.repoDoctor);
    console.log(
      await actualizarCalificacionPromedio.execute(
        cita.identificadorDoctor,
        calificacion,
      ),
    );
    return await this.repoCita.guardarCita(cita);
  }
}
