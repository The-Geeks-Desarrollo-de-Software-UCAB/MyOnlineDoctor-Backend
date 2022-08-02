import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { OrmRepoCita } from '../repositories/ormRepoCita.repository';
import { CitaEntity } from 'src/modules/cita/domain/entities/cita';
import { OrmRepoDoctor } from 'src/modules/doctor/infrastructure/typeorm/repositories/ormRepoDoctor.repository';
import { OrmRepoPaciente } from 'src/modules/paciente/infrastructure/typeorm/repositories/ormRepoPaciente.repository';
import { SolicitarCitaService } from 'src/modules/cita/application/services/solicitarCita.service';
import { AgendarCitaService } from 'src/modules/cita/application/services/agendarCita.service';
import { AceptarFechaCitaService } from 'src/modules/cita/application/services/aceptarFecha.service';
import { RechazarFechaCitaService } from 'src/modules/cita/application/services/rechazarFecha.service';
import { RechazarCitaService } from 'src/modules/cita/application/services/rechazarCita.service';
import { FinalizarCitaService } from 'src/modules/cita/application/services/finalizarCita.service';
import { CalificarCitaService } from 'src/modules/cita/application/services/calificarCita.service';
import { CancelarCitaDoctorService } from 'src/modules/cita/application/services/cancelarCitaDoctor.service';
import { CancelarCitaPacienteService } from 'src/modules/cita/application/services/cancelarCitaPaciente.service';
import { EncontrarCitaPorDoctorYEstadoService } from 'src/modules/cita/application/services/encontrarCitaPorDoctorYEstado.service';
import { EncontrarCitaPorPacienteYEstadoService } from 'src/modules/cita/application/services/encontrarCitaPorPacienteYEstado.service';
import { EncontrarCitaPorDoctorService } from 'src/modules/cita/application/services/encontrarCitaPorDoctor.service';
import { EncontrarCitaPorPacienteService } from 'src/modules/cita/application/services/encontrarCitaPorPaciente.service';
import { EncontrarCitasService } from 'src/modules/cita/application/services/encontrarCitas.service';
import { EncontrarCitaPorIdService } from 'src/modules/cita/application/services/encontrarCitaPorId.service';

@Controller('api/cita')
export class CitaController {
  private readonly ormRepoCita: OrmRepoCita;
  private readonly ormRepoDoctor: OrmRepoDoctor;
  private readonly ormRepoPaciente: OrmRepoPaciente;

  constructor(private readonly manager: EntityManager) {
    this.ormRepoCita = this.manager.getCustomRepository(OrmRepoCita);
    this.ormRepoDoctor = this.manager.getCustomRepository(OrmRepoDoctor);
    this.ormRepoPaciente = this.manager.getCustomRepository(OrmRepoPaciente);
  }

  @Get('Todas')
  async encontrarTodas(): Promise<CitaEntity[]> {
    const servicio = new EncontrarCitasService(this.ormRepoCita);
    return await servicio.execute();
  }

  @Get('PorId:id_cita')
  async encontrarCitaPorId(
    @Param('id_cita') id_cita: string,
  ): Promise<CitaEntity> {
    const servicio = new EncontrarCitaPorIdService(this.ormRepoCita);
    return await servicio.execute(id_cita);
  }

  @Get('PorDoctor:id_doctor')
  async encontrarCitaPorDoctor(
    @Param('id_doctor') id_doctor: string,
  ): Promise<CitaEntity[]> {
    const servicio = new EncontrarCitaPorDoctorService(this.ormRepoCita);
    return await servicio.execute(id_doctor);
  }

  @Get('PorPaciente:id_paciente')
  async encontrarCitaPorPaciente(
    @Param('id_paciente') id_paciente: string,
  ): Promise<CitaEntity[]> {
    const servicio = new EncontrarCitaPorPacienteService(this.ormRepoCita);
    return await servicio.execute(id_paciente);
  }

  @Get('SolicitadasDoctor:id_doctor')
  async encontrarSolicitadasDoctor(
    @Param('id_doctor') id_doctor: string,
  ): Promise<CitaEntity[]> {
    const servicio = new EncontrarCitaPorDoctorYEstadoService(this.ormRepoCita);
    return await servicio.execute(id_doctor, 'SOLICITADA');
  }

  @Get('AceptadasDoctor:id_doctor')
  async encontrarAceptadasDoctor(
    @Param('id_doctor') id_doctor: string,
  ): Promise<CitaEntity[]> {
    const servicio = new EncontrarCitaPorDoctorYEstadoService(this.ormRepoCita);
    return await servicio.execute(id_doctor, 'ACEPTADA');
  }

  @Get('SolicitadasPaciente:id_paciente')
  async encontrarSolicitadasPaciente(
    @Param('id_paciente') id_paciente: string,
  ): Promise<CitaEntity[]> {
    const servicio = new EncontrarCitaPorPacienteYEstadoService(
      this.ormRepoCita,
    );
    return await servicio.execute(id_paciente, 'SOLICITADA');
  }

  @Get('AgendadasPaciente:id_paciente')
  async encontrarAgendadasPaciente(
    @Param('id_paciente') id_paciente: string,
  ): Promise<CitaEntity[]> {
    const servicio = new EncontrarCitaPorPacienteYEstadoService(
      this.ormRepoCita,
    );
    return await servicio.execute(id_paciente, 'AGENDADA');
  }

  @Get('AceptadasPaciente:id_paciente')
  async encontrarAceptadasPaciente(
    @Param('id_paciente') id_paciente: string,
  ): Promise<CitaEntity[]> {
    const servicio = new EncontrarCitaPorPacienteYEstadoService(
      this.ormRepoCita,
    );
    return await servicio.execute(id_paciente, 'ACEPTADA');
  }

  @Post('Solicitar')
  async solicitarCita(@Body() para): Promise<CitaEntity> {
    const servicio = new SolicitarCitaService(
      this.ormRepoCita,
      this.ormRepoDoctor,
      this.ormRepoPaciente,
    );
    return await servicio.execute(
      para.id_cita,
      para.duracion,
      para.tipo,
      para.motivo,
      para.id_paciente,
      para.id_doctor,
    );
  }

  @Put('Agendar')
  async agendarCita(@Body() para): Promise<CitaEntity> {
    const servicio = new AgendarCitaService(
      this.ormRepoCita,
      this.ormRepoDoctor,
    );
    return await servicio.execute(para.id_doctor, para.id_cita, para.fecha);
  }

  @Put('Rechazar')
  async rechazarCita(@Body() para): Promise<CitaEntity> {
    const servicio = new RechazarCitaService(
      this.ormRepoCita,
      this.ormRepoDoctor,
    );
    return await servicio.execute(para.id_doctor, para.id_cita);
  }

  @Put('AceptarFecha')
  async aceptarFechaCita(@Body() para): Promise<CitaEntity> {
    const servicio = new AceptarFechaCitaService(
      this.ormRepoCita,
      this.ormRepoPaciente,
    );
    return await servicio.execute(para.id_paciente, para.id_cita);
  }

  @Put('RechazarFecha')
  async rechazarFechaCita(@Body() para): Promise<CitaEntity> {
    const servicio = new RechazarFechaCitaService(
      this.ormRepoCita,
      this.ormRepoPaciente,
    );
    return await servicio.execute(para.id_paciente, para.id_cita);
  }

  @Put('CancelarDoctor')
  async cancelarCitaDoctor(@Body() para): Promise<CitaEntity> {
    const servicio = new CancelarCitaDoctorService(
      this.ormRepoCita,
      this.ormRepoDoctor,
    );
    return await servicio.execute(para.id_doctor, para.id_cita);
  }

  @Put('CancelarPaciente')
  async cancelarCitaPaciente(@Body() para): Promise<CitaEntity> {
    const servicio = new CancelarCitaPacienteService(
      this.ormRepoCita,
      this.ormRepoPaciente,
    );
    return await servicio.execute(para.id_paciente, para.id_cita);
  }

  @Put('Finalizar')
  async finalizarCita(@Body() para): Promise<CitaEntity> {
    const servicio = new FinalizarCitaService(
      this.ormRepoCita,
      this.ormRepoDoctor,
    );
    return await servicio.execute(para.id_doctor, para.id_cita);
  }

  @Put('Calificar')
  async calificarCita(@Body() para): Promise<CitaEntity> {
    const servicio = new CalificarCitaService(
      this.ormRepoCita,
      this.ormRepoPaciente,
    );
    return await servicio.execute(
      para.id_paciente,
      para.id_cita,
      para.calificacion,
    );
  }
}
/*//Mover al controlador de Doctor, este funciona
  @Get('porEspecialidad:id_especialidad')
  async encontrarPorEspecialidad(
    @Param('id_especialidad') id_especialidad: number,
  ): Promise<DoctorEntity[]> {
    return await this.ormRepoDoctor.encontrarPorEspecialidad(id_especialidad);
  }*/
/*  @Get('todos')
  async encontrarTodos(): Promise<DoctorEntity[]> {
    return await this.getService().encontrarTodos(this.ormRepoDoctor);
  }*/
