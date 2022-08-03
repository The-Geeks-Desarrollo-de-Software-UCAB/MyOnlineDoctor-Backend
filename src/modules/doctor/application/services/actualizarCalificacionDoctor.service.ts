import { IRepoCita } from 'src/modules/cita/application/IRepoCita.repository';
import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class ActualizarCalificacionDoctorService {
  constructor(
    private readonly repoCita: IRepoCita,
    private readonly repoDoctor: IRepoDoctor,
  ) {}
  async execute(
    id_doctor: string,
    calificacion: number,
  ): Promise<DoctorEntity> {
    const puntuacion: number = parseInt(calificacion.toString());
    // se calcula el numero de citas calificadas del doctor
    let numeroCitas = await this.repoCita.contarPorDoctor(id_doctor);
    //se busca al doctor calificado en la cita
    const doctor = await this.repoDoctor.encontrarPorId(id_doctor);
    //se determina si el doctor ha sido calificado antes
    if (doctor.promedioCalificacion.promedioCalificacion == null) {
      doctor.actualizarCalificacion(puntuacion);
    } else {
      //en el caso de que si haya sido calificado
      let calificacionPromedio: number =
        doctor.promedioCalificacion.promedioCalificacion * numeroCitas;
      calificacionPromedio = calificacionPromedio + puntuacion;
      numeroCitas += 1;
      calificacionPromedio = calificacionPromedio / numeroCitas;
      doctor.actualizarCalificacion(calificacionPromedio);
    }
    return await this.repoDoctor.guardarDoctor(doctor);
  }
}
