import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/Entities/cita.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/Entities/doctor.entity';
import { CitaOrmMapper } from '../../cita.orm-mapper';
import { decoLog } from 'src/modules/decorators/logging-decorator';

@Injectable()
export class CitaService {
  constructor(
    @InjectRepository(Cita) private citaRepo: Repository<Cita>,
    @InjectRepository(Doctor) private doctorRepo: Repository<Doctor>,
    @InjectRepository(Paciente) private pacienteRepo: Repository<Paciente>,
  ) {}

  getRepository(): Repository<Cita> {
    return this.citaRepo;
  }

  findAll(): Promise<Cita[]> {
    return this.getRepository().find({
      relations: { doctor: true, paciente: true },
    });
  }

  @decoLog()
  async findByDoctor(by: string): Promise<Cita[]> {
    //const especialidad = await this.specialtyRepo.findBy({ id_specialty: by }); en el caso de que no queramos mandar error se usa esta
    const doctor = await this.doctorRepo.findOneByOrFail({
      id_doctor: by,
    });
    let resultado = await this.getRepository().find({
      where: { doctor: doctor },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async findByPaciente(by: string): Promise<Cita[]> {
    //const especialidad = await this.specialtyRepo.findBy({ id_specialty: by }); en el caso de que no queramos mandar error se usa esta
    const paciente = await this.pacienteRepo.findOneByOrFail({
      id_paciente: by,
    });
    let resultado = await this.getRepository().find({
      where: { paciente: paciente },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async findByEstado(by: string): Promise<Cita[]> {
    //const especialidad = await this.specialtyRepo.findBy({ id_specialty: by }); en el caso de que no queramos mandar error se usa esta
    /*const paciente = await this.pacienteRepo.findOneByOrFail({
      id_paciente: by,
    });*/
    let resultado = await this.getRepository().find({
      where: { estadoCita: by },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async encontrarSolicitadasDoctor(doctor_id: string): Promise<Cita[]> {
    const doctor = await this.doctorRepo.findOneByOrFail({
      id_doctor: doctor_id,
    });
    let resultado = await this.getRepository().find({
      where: { estadoCita: 'SOLICITADA', doctor: doctor },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async encontrarAceptadasDoctor(doctor_id: string): Promise<Cita[]> {
    const doctor = await this.doctorRepo.findOneByOrFail({
      id_doctor: doctor_id,
    });
    let resultado = await this.getRepository().find({
      where: { estadoCita: 'ACEPTADA', doctor: doctor },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async encontrarSolicitadasPaciente(paciente_id: string): Promise<Cita[]> {
    const paciente = await this.pacienteRepo.findOneByOrFail({
      id_paciente: paciente_id,
    });
    let resultado = await this.getRepository().find({
      where: { paciente: paciente, estadoCita: 'SOLICITADA' },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async encontrarAgendadasPaciente(paciente_id: string): Promise<Cita[]> {
    const paciente = await this.pacienteRepo.findOneOrFail({
      where: { id_paciente: paciente_id },
    });
    let resultado = await this.getRepository().find({
      where: { paciente: paciente, estadoCita: 'AGENDADA' },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async encontrarAceptadasPaciente(paciente_id: string): Promise<Cita[]> {
    const paciente = await this.pacienteRepo.findOneOrFail({
      where: { id_paciente: paciente_id },
    });
    let resultado = await this.getRepository().find({
      where: { paciente: paciente, estadoCita: 'ACEPTADA' },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async solicitarCita(
    cita_id: string,
    duracion: number,
    tipo: string,
    motivo: string,
    paciente_id: string,
    doctor_id: string,
  ): Promise<Cita> {
    const paciente = await this.pacienteRepo.findOneOrFail({
      where: { id_paciente: paciente_id },
    });
    const doctor = await this.doctorRepo.findOneByOrFail({
      id_doctor: doctor_id,
    });
    let cita = this.getRepository().create({
      id_cita: cita_id,
      fecha: null,
      duracion: duracion,
      estadoCita: 'SOLICITADA',
      tipoCita: tipo,
      motivo: motivo,
      calificacion: null,
      paciente: paciente,
      doctor: doctor,
    });
    let mapper = new CitaOrmMapper(this.doctorRepo, this.pacienteRepo);
    let citaDomain = mapper.toDomain(cita);
    //cita = await mapper.toInfrastructure(citaDomain);
    await this.getRepository().save(cita);
    return cita;
  }

  @decoLog()
  async agendarCita(
    doctor_id: string,
    cita_id: string,
    fecha: Date,
  ): Promise<Cita> {
    const doctor = await this.doctorRepo.findOneByOrFail({
      id_doctor: doctor_id,
    });
    let cita = await this.getRepository().findOneOrFail({
      where: { id_cita: cita_id, doctor: doctor, estadoCita: 'SOLICITADA' },
      relations: { doctor: true, paciente: true },
    });
    cita.fecha = fecha;
    cita.estadoCita = 'AGENDADA';
    let mapper = new CitaOrmMapper(this.doctorRepo, this.pacienteRepo);
    let citaDomain = mapper.toDomain(cita);
    //cita = await mapper.toInfrastructure(citaDomain);
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async rechazarPaciente(doctor_id: string, cita_id: string): Promise<Cita> {
    const doctor = await this.doctorRepo.findOneByOrFail({
      id_doctor: doctor_id,
    });
    let cita = await this.getRepository().findOneOrFail({
      where: { id_cita: cita_id, doctor: doctor, estadoCita: 'SOLICITADA' },
      relations: { doctor: true, paciente: true },
    });
    cita.estadoCita = 'RECHAZADA';
    let mapper = new CitaOrmMapper(this.doctorRepo, this.pacienteRepo);
    let citaDomain = mapper.toDomain(cita);
    //cita = await mapper.toInfrastructure(citaDomain);
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async aceptarFechaCita(paciente_id: string, cita_id: string): Promise<Cita> {
    
    let cita = await this.getRepository().findOneOrFail({
      where: { id_cita: cita_id},
      relations: { doctor: true, paciente: true },
    });
    cita.estadoCita = 'ACEPTADA';
    let mapper = new CitaOrmMapper(this.doctorRepo, this.pacienteRepo);
    let citaDomain = mapper.toDomain(cita);
    //cita = await mapper.toInfrastructure(citaDomain);
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async rechazarFechaCita(paciente_id: string, cita_id: string): Promise<Cita> {
    const paciente = await this.pacienteRepo.findOneOrFail({
      where: { id_paciente: paciente_id },
    });
    let cita = await this.getRepository().findOneOrFail({
      where: { id_cita: cita_id, paciente: paciente, estadoCita: 'AGENDADA' },
      relations: { doctor: true, paciente: true },
    });
    cita.estadoCita = 'RECHAZADA';
    let mapper = new CitaOrmMapper(this.doctorRepo, this.pacienteRepo);
    let citaDomain = mapper.toDomain(cita);
    //cita = await mapper.toInfrastructure(citaDomain);
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async finalizarCita(doctor_id: string, cita_id: string): Promise<Cita> {
    const doctor = await this.doctorRepo.findOneByOrFail({
      id_doctor: doctor_id,
    });
    let cita = await this.getRepository().findOneOrFail({
      where: { id_cita: cita_id, doctor: doctor, estadoCita: 'ACEPTADA' },
      relations: { doctor: true, paciente: true },
    });
    cita.estadoCita = 'FINALIZADA';
    let mapper = new CitaOrmMapper(this.doctorRepo, this.pacienteRepo);
    let citaDomain = mapper.toDomain(cita);
    //cita = await mapper.toInfrastructure(citaDomain);
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  @decoLog()
  async calificarCita(
    paciente_id: string,
    cita_id: string,
    calificacion: number,
  ): Promise<Cita> {
    const paciente = await this.pacienteRepo.findOneOrFail({
      where: { id_paciente: paciente_id },
    });
    let cita = await this.getRepository().findOneOrFail({
      where: { id_cita: cita_id, paciente: paciente, estadoCita: 'FINALIZADA' },
      relations: { doctor: true, paciente: true },
    });
    cita.calificacion = calificacion;
    let mapper = new CitaOrmMapper(this.doctorRepo, this.pacienteRepo);
    let citaDomain = mapper.toDomain(cita);
    //cita = await mapper.toInfrastructure(citaDomain);
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }
}
