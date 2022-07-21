import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/Entities/cita.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/Entities/doctor.entity';

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
    await this.getRepository().save(cita);
    return cita;
  }

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
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  async rechazarPaciente(doctor_id: string, cita_id: string): Promise<Cita> {
    const doctor = await this.doctorRepo.findOneByOrFail({
      id_doctor: doctor_id,
    });
    let cita = await this.getRepository().findOneOrFail({
      where: { id_cita: cita_id, doctor: doctor, estadoCita: 'SOLICITADA' },
      relations: { doctor: true, paciente: true },
    });
    cita.estadoCita = 'RECHAZADA';
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  async aceptarFechaCita(paciente_id: string, cita_id: string): Promise<Cita> {
    const paciente = await this.pacienteRepo.findOneOrFail({
      where: { id_paciente: paciente_id },
    });
    let cita = await this.getRepository().findOneOrFail({
      where: { id_cita: cita_id, paciente: paciente, estadoCita: 'AGENDADA' },
      relations: { doctor: true, paciente: true },
    });
    cita.estadoCita = 'ACEPTADA';
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  async rechazarFechaCita(paciente_id: string, cita_id: string): Promise<Cita> {
    const paciente = await this.pacienteRepo.findOneOrFail({
      where: { id_paciente: paciente_id },
    });
    let cita = await this.getRepository().findOneOrFail({
      where: { id_cita: cita_id, paciente: paciente, estadoCita: 'AGENDADA' },
      relations: { doctor: true, paciente: true },
    });
    cita.estadoCita = 'RECHAZADA';
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

  async finalizarCita(doctor_id: string, cita_id: string): Promise<Cita> {
    const doctor = await this.doctorRepo.findOneByOrFail({
      id_doctor: doctor_id,
    });
    let cita = await this.getRepository().findOneOrFail({
      where: { id_cita: cita_id, doctor: doctor, estadoCita: 'ACEPTADA' },
      relations: { doctor: true, paciente: true },
    });
    cita.estadoCita = 'FINALIZADA';
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }

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
    await this.getRepository().save(cita);
    let resultado = await this.getRepository().findOne({
      where: { id_cita: cita_id },
      relations: { doctor: true, paciente: true },
    });
    return resultado;
  }
}
