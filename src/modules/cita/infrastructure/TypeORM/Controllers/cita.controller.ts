import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Cita } from '../Entities/cita.entity';
import { EntityManager, getCustomRepository, Repository } from 'typeorm';
import { OrmRepoCita } from '../Repositories/ORMRepoCita.repository';
import { CitaService } from '../Services/cita.service';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/Entities/doctor.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';
import { CitaOrmMapper } from '../../cita.orm-mapper';
import { CitaEntity } from 'src/modules/cita/domain/entities/cita.entity';
import { OrmRepoDoctor } from 'src/modules/doctor/infrastructure/TypeORM/Repositories/ormRepoDoctor.repository';
import { DoctorEntity } from 'src/modules/doctor/domain/entities/doctor.entity';

@Controller('api/cita')
export class CitaController {
  private readonly ormRepoCita: OrmRepoCita;
  private readonly ormRepoDoctor: OrmRepoDoctor; //cambiar por equivalente a OrmRepoCita
  private readonly ormRepoPaciente: Repository<Paciente>; // cambiar por equivalente a OrmRepoCita
  //private readonly citaOrmMapper: CitaOrmMapper;
  constructor(
    private readonly manager: EntityManager,
    protected citaService: CitaService,
  ) {
    this.ormRepoCita = this.manager.getCustomRepository(OrmRepoCita); //getCustomRepository(OrmRepoCita);
    this.ormRepoDoctor = this.manager.getCustomRepository(OrmRepoDoctor);
    this.ormRepoPaciente = this.manager.getRepository(Paciente);
    this.citaService = citaService;
  }

  getService(): CitaService {
    return this.citaService;
  }

  @Get('porEspecialidad:id_especialidad')
  async encontrarPorEspecialidad(
    @Param('id_especialidad') id_especialidad: number,
  ): Promise<DoctorEntity[]> {
    return await this.getService().encontrarPorEspecialidad(
      this.ormRepoDoctor,
      id_especialidad,
    );
  }

  @Get('todos')
  async encontrarTodos(): Promise<DoctorEntity[]> {
    return await this.getService().encontrarTodos(this.ormRepoDoctor);
  }

  @Get('todas')
  async encontrarTodas(): Promise<CitaEntity[]> {
    return await this.getService().encontrarTodas(this.ormRepoCita);
  }

  @Get('porDoctor:id_doctor')
  async findByDoctor(
    @Param('id_doctor') id_doctor: string,
  ): Promise<CitaEntity[]> {
    return await this.getService().encontrarPorDoctor(
      this.ormRepoCita,
      this.ormRepoDoctor,
      id_doctor,
    );
  }

  @Get('SolicitadasDoctor:id_doctor')
  async encontrarSolicitadasDoctor(
    @Param('id_doctor') id_doctor: string,
  ): Promise<CitaEntity[]> {
    return await this.getService().encontrarPorDoctorYEstado(
      this.ormRepoCita,
      this.ormRepoDoctor,
      id_doctor,
      'SOLICITADA',
    );
  }

  @Post('Solicitar')
  async solicitarCita(@Body() para): Promise<CitaEntity> {
    return await this.getService().solicitarCita(
      this.ormRepoCita,
      para.id_cita,
      para.duracion,
      para.tipo,
      para.motivo,
      para.id_paciente,
      para.id_doctor,
    );
  }

  /*@Get('all')
  async findAll(): Promise<Cita[]> {
    return await this.getService().findAll();
  }

  @Get('byDoctor:id_doctor')
  async findByDoctor(@Param('id_doctor') id_doctor: string): Promise<Cita[]> {
    return await this.getService().findByDoctor(id_doctor);
  }

  @Get('byPaciente:id_paciente')
  async findByPaciente(
    @Param('id_paciente') id_paciente: string,
  ): Promise<Cita[]> {
    return await this.getService().findByPaciente(id_paciente);
  }

  @Get('byEstado:estado')
  async findByEstado(@Param('estado') estado: string): Promise<Cita[]> {
    return await this.getService().findByEstado(estado);
  }

  @Get('SolicitadasDoctor:id_doctor')
  async encontrarSolicitadasDoctor(
    @Param('id_doctor') id_doctor: string,
  ): Promise<Cita[]> {
    return await this.getService().encontrarSolicitadasDoctor(id_doctor);
  }

  @Get('AceptadasDoctor:id_doctor')
  async encontrarAceptadasDoctor(
    @Param('id_doctor') id_doctor: string,
  ): Promise<Cita[]> {
    return await this.getService().encontrarAceptadasDoctor(id_doctor);
  }

  @Get('SolicitadasPaciente:id_paciente')
  async encontrarSolicitadasPaciente(
    @Param('id_paciente') id_paciente: string,
  ): Promise<Cita[]> {
    return await this.getService().encontrarSolicitadasPaciente(id_paciente);
  }

  @Get('AgendadasPaciente:id_paciente')
  async encontrarAgendadasPaciente(
    @Param('id_paciente') id_paciente: string,
  ): Promise<Cita[]> {
    return await this.getService().encontrarAgendadasPaciente(id_paciente);
  }

  @Get('AceptadasPaciente:id_paciente')
  async encontrarAceptadasPaciente(
    @Param('id_paciente') id_paciente: string,
  ): Promise<Cita[]> {
    return await this.getService().encontrarAceptadasPaciente(id_paciente);
  }

  @Post('Solicitar')
  async solicitarCita(@Body() para): Promise<Cita> {
    return await this.getService().solicitarCita(
      para.id_cita,
      para.duracion,
      para.tipo,
      para.motivo,
      para.id_paciente,
      para.id_doctor,
    );
  }

  @Put('Agendar')
  async agendarCita(@Body() para): Promise<Cita> {
    return await this.getService().agendarCita(
      para.id_doctor,
      para.id_cita,
      para.fecha,
    );
  }

  @Put('RechazarPaciente')
  async rechazarPaciente(@Body() para): Promise<Cita> {
    return await this.getService().rechazarPaciente(
      para.id_doctor,
      para.id_cita,
    );
  }

  @Put('AceptarFecha')
  async aceptarFechaCita(@Body() para): Promise<Cita> {
    return await this.getService().aceptarFechaCita(
      para.id_paciente,
      para.id_cita,
    );
  }

  @Put('RechazarFecha')
  async rechazarFechaCita(@Body() para): Promise<Cita> {
    return await this.getService().rechazarFechaCita(
      para.id_paciente,
      para.id_cita,
    );
  }

  @Put('Finalizar')
  async finalizarCita(@Body() para): Promise<Cita> {
    return await this.getService().finalizarCita(para.id_doctor, para.id_cita);
  }

  @Put('Calificar')
  async calificarCita(@Body() para): Promise<Cita> {
    return await this.getService().calificarCita(
      para.id_paciente,
      para.id_cita,
      para.calificacion,
    );
  }*/
}
