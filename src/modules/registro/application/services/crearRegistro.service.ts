import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { IRepoRegistro } from 'src/modules/registro/application/IRepoRegistro.repository';
import { RegistroEntity } from 'src/modules/registro/domain/entities/registro';

export class CrearRegistroService {
  constructor(
    private readonly repoCita: IRepoCita,
    private readonly repoDoctor: IRepoDoctor,
    private readonly repoRegistro: IRepoRegistro,
  ) {}

  async execute(
    registro_id: string,
    prescripcion: string,
    historia: string,
    diagnostico: string,
    plan: string,
    examen: string,
    cita_id: string,
    doctor_id: string,
  ): Promise<RegistroEntity> {
    //buscamos la cita a la cual se le creara el registro de historia medica y si no existe se genera error
    const cita = await this.repoCita.encontrarPorId(cita_id);
    //buscamos al doctor que provisto y si no existe se genera error
    const doctor = await this.repoDoctor.encontrarPorId(doctor_id);
    //buscamos al doctor que atendio la cita
    const doctorC = await this.repoDoctor.encontrarPorId(
      cita.identificadorDoctor,
    );
    //Se valida que el doctor solicitado es quien esta creando el registro
    if (!(doctor.id.id == doctorC.id.id)) {
      throw new Error(
        'Las registros de la historia medica solo pueden ser creados por el Doctor que atendio la cita',
      );
    }
    let registro = RegistroEntity.create(
      registro_id,
      prescripcion,
      historia,
      diagnostico,
      plan,
      examen,
      cita_id,
      doctor_id,
    );
    return await this.repoRegistro.guardarRegistro(registro);
  }
}
