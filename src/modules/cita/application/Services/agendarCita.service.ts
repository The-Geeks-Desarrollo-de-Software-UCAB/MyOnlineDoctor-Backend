import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { CitaEntity } from '../../domain/entities/cita.entity';
import { Fecha } from '../../domain/value-objects/fecha.value-object';

export class AgendarCitaService {
  constructor(
    private readonly repoCita: IRepoCita,
    private readonly repoDoctor: IRepoDoctor,
  ) {}

  async execute(
    id_doctor: string,
    id_cita: string,
    fecha: Date,
  ): Promise<CitaEntity> {
    //buscamos al doctor solicitado y si no existe se genera error
    const doctor = await this.repoDoctor.encontrarPorId(id_doctor);
    //validamos que la fecha en la cual se va a agendar la cita sea valida
    if (fecha < new Date(Date.now())) {
      throw new Error('Fecha invalida para cita');
    }
    //se busca la cita
    let cita = await this.repoCita.encontrarPorId(id_cita);
    //se busca al doctor solicitado en la cita
    const doctorC = await this.repoDoctor.encontrarPorId(
      cita.identificadorDoctor,
    );
    //Se valida que el doctor solicitado es quien agenda la cita
    if (!(doctor.id.id == doctorC.id.id)) {
      throw new Error(
        'Las citas solo pueden ser agendadas por el Doctor que las atendera',
      );
    }
    //se le asigna la fecha a la cita
    cita.agendar(new Fecha(fecha));
    return await this.repoCita.guardarCita(cita);
  }
}
