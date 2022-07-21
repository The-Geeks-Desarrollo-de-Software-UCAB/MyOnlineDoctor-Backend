import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Cita } from '../Entities/cita.entity';
import { CitaService } from '../Services/cita.service';

@Controller('api/cita')
export class CitaController {
  constructor(protected citaService: CitaService) {}

  getService(): CitaService {
    return this.citaService;
  }

  @Get('all')
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
  }
}
