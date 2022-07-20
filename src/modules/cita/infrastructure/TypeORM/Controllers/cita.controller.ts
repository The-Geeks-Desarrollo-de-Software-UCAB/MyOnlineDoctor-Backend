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

  @Get('byDoctor')
  async findByDoctor(@Body() by): Promise<Cita[]> {
    return await this.getService().findByDoctor(by.id_doctor);
  }

  @Get('byPaciente')
  async findByPaciente(@Body() by): Promise<Cita[]> {
    return await this.getService().findByPaciente(by.id_paciente);
  }

  @Get('byEstado')
  async findByEstado(@Body() by): Promise<Cita[]> {
    return await this.getService().findByEstado(by.estado);
  }

  @Get('SolicitadasDoctor')
  async encontrarSolicitadasDoctor(@Body() para): Promise<Cita[]> {
    return await this.getService().encontrarSolicitadasDoctor(para.id_doctor);
  }

  @Get('AceptadasDoctor')
  async encontrarAceptadasDoctor(@Body() para): Promise<Cita[]> {
    return await this.getService().encontrarAceptadasDoctor(para.id_doctor);
  }

  @Get('SolicitadasPaciente')
  async encontrarSolicitadasPaciente(@Body() para): Promise<Cita[]> {
    return await this.getService().encontrarSolicitadasPaciente(
      para.id_paciente,
    );
  }

  @Get('AgendadasPaciente')
  async encontrarAgendadasPaciente(@Body() para): Promise<Cita[]> {
    return await this.getService().encontrarAgendadasPaciente(para.id_paciente);
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
