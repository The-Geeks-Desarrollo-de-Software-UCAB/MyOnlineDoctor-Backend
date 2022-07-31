import { Apellido } from 'src/modules/doctor/domain/value-objects/apellido.value-object';
import { EspecialidadDomain } from 'src/modules/doctor/domain/value-objects/especialidad.value-object';
import { IdDoctor } from 'src/modules/doctor/domain/value-objects/idDoctor.value-object';
import { Localizacion } from 'src/modules/doctor/domain/value-objects/localizacion.value-object';
import { Nombre } from 'src/modules/doctor/domain/value-objects/nombre.value-object';
import { PromedioCalificacion } from 'src/modules/doctor/domain/value-objects/promedio-calificacion.value-object';
import { DoctorEntity } from '../domain/entities/doctor.entity';
import { Especialidad } from './typeorm/Entities/specialty.entity';
import { Doctor } from './typeorm/Entities/doctor.entity';

export class DoctorOrmMapper {
  async toDomain(doctor: Doctor): Promise<DoctorEntity> {
    const especialidades: EspecialidadDomain[] = [];
    let especialidadesOrm: Especialidad[] = [];
    doctor.especialidades.forEach((especialidad) => {
      especialidades.push(new EspecialidadDomain(especialidad.nombre));
    });
    const doctorEntity = new DoctorEntity(
      new IdDoctor(doctor.id_doctor),
      new Nombre(doctor.primerNombre, doctor.segundoNombre),
      new Apellido(doctor.primerApellido, doctor.segundoApellido),
      especialidades,
      new PromedioCalificacion(doctor.promedioCalificacion),
      new Localizacion(doctor.latitud, doctor.longitud),
    );
    doctorEntity.limpiarEventos();
    return doctorEntity;
  }

  async toDomainMulti(doctores: Doctor[]): Promise<DoctorEntity[]> {
    const resultado: DoctorEntity[] = [];
    for await (let doctor of doctores) {
      resultado.push(await this.toDomain(doctor));
    }
    return resultado;
  }
}