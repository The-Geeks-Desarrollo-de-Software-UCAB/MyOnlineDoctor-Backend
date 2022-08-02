import { IdRegistro } from 'src/modules/registro/domain/value-objects/idRegistro.value-object';
import { Prescripcion } from 'src/modules/registro/domain/value-objects/prescripcion.value-object';
import { Historia } from 'src/modules/registro/domain/value-objects/historia.value-object';
import { Diagnostico } from 'src/modules/registro/domain/value-objects/diagnostico.value-object';
import { Plan } from 'src/modules/registro/domain/value-objects/plan.value-object';
import { Examen } from 'src/modules/registro/domain/value-objects/examen.value-object';
import { Fecha } from 'src/modules/registro/domain/value-objects/fecha.value-object';
import { IdCita } from 'src/modules/cita/domain/value-objects/idCita.value-object';
import { RegistroEntity } from 'src/modules/registro/domain/entities/registro';
import { Registro } from './entities/registro.entity';
import { getRepository, Repository } from 'typeorm';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/entities/cita.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { IdDoctor } from 'src/modules/doctor/domain/value-objects/idDoctor.value-object';

export class RegistroOrmMapper {
  private readonly ormCitaRepo: Repository<Cita>;
  private readonly ormDoctorRepo: Repository<Doctor>;
  private readonly ormPacienteRepo: Repository<Paciente>;
  constructor() {
    this.ormCitaRepo = getRepository(Cita);
    this.ormDoctorRepo = getRepository(Doctor);
    this.ormPacienteRepo = getRepository(Paciente);
  }

  public async toDomain(registro: Registro): Promise<RegistroEntity> {
    const registroEntity = await new RegistroEntity(
      new IdRegistro(registro.id_registro),
      new Prescripcion(registro.prescripcion),
      new Historia(registro.historia),
      new Diagnostico(registro.diagnostico),
      new Plan(registro.plan),
      new Examen(registro.examen),
      new Fecha(registro.fecha),
      new IdCita(registro.cita.id_cita),
      new IdDoctor(registro.doctor.id_doctor),
    );
    registroEntity.limpiarEventos();
    return registroEntity;
  }

  public async toDomainMulti(registros: Registro[]): Promise<RegistroEntity[]> {
    const resultado: RegistroEntity[] = [];
    for await (let registro of registros) {
      resultado.push(await this.toDomain(registro));
    }
    return resultado;
  }

  public async toInfrastructure(registro: RegistroEntity): Promise<Registro> {
    const cita = await this.ormCitaRepo.findOneOrFail({
      where: { id_cita: registro.identificadorCita },
      relations: ['paciente'],
    });
    const doctor = await this.ormDoctorRepo.findOneOrFail({
      where: { id_doctor: registro.identificadorDoctor },
    });
    let ormPaciente: Paciente = cita.paciente;
    const paciente = await this.ormPacienteRepo.findOneOrFail({
      where: { id_paciente: ormPaciente.id_paciente },
    });

    return {
      id_registro: registro.id,
      prescripcion: registro.prescripcion,
      historia: registro.historia,
      diagnostico: registro.diagnostico,
      plan: registro.plan,
      examen: registro.examen,
      fecha: registro.fecha,
      cita: cita,
      doctor: doctor,
      paciente: paciente,
    };
  }
}
