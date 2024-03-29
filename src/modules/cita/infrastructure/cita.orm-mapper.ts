import { IdDoctor } from 'src/modules/doctor/domain/value-objects/idDoctor.value-object';
import { IdPaciente } from 'src/modules/paciente/domain/value-objects/idPaciente.value-object';
import { CitaEntity } from '../domain/entities/cita';
import { Calificacion } from '../domain/value-objects/calificacion.value-object';
import { Duracion } from '../domain/value-objects/duracion.value-object';
import { EstadoCita } from '../domain/value-objects/estadoCita.value-object';
import { Fecha } from '../domain/value-objects/fecha.value-object';
import { IdCita } from '../domain/value-objects/idCita.value-object';
import { Motivo } from '../domain/value-objects/motivo.value-object';
import { TipoCita } from '../domain/value-objects/tipoCita.object-value';
import { Cita } from './typeorm/entities/cita.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { getRepository, Repository } from 'typeorm';

export class CitaOrmMapper {
  private readonly ormDoctorRepo: Repository<Doctor>;
  private readonly ormPacienteRepo: Repository<Paciente>;
  constructor() {
    this.ormDoctorRepo = getRepository(Doctor);
    this.ormPacienteRepo = getRepository(Paciente);
  }

  public async toDomain(cita: Cita): Promise<CitaEntity> {
    const citaEntity = await new CitaEntity(
      new IdCita(cita.id_cita),
      new Fecha(cita.fecha),
      EstadoCita[cita.estadoCita],
      TipoCita[cita.tipoCita],
      new Motivo(cita.motivo),
      new Duracion(cita.duracion),
      new Calificacion(cita.calificacion),
      new IdPaciente(cita.paciente.id_paciente),
      new IdDoctor(cita.doctor.id_doctor),
    );
    citaEntity.limpiarEventos();
    return citaEntity;
  }

  public async toDomainMulti(citas: Cita[]): Promise<CitaEntity[]> {
    const resultado: CitaEntity[] = [];
    for await (let cita of citas) {
      resultado.push(await this.toDomain(cita));
    }
    return resultado;
  }

  public async toInfrastructure(cita: CitaEntity): Promise<Cita> {
    const paciente = await this.ormPacienteRepo.findOneOrFail({
      where: { id_paciente: cita.identificadorPaciente },
    });
    const doctor = await this.ormDoctorRepo.findOneOrFail({
      where: { id_doctor: cita.identificadorDoctor },
    });
    return {
      id_cita: cita.id,
      fecha: cita.fecha,
      duracion: cita.duracion,
      tipoCita: cita.tipo,
      estadoCita: cita.estado,
      motivo: cita.motivo,
      doctor: doctor,
      paciente: paciente,
      calificacion: cita.calificacion,
    };
  }
}
