import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { OrmRepoCita } from 'src/modules/cita/infrastructure/typeorm/repositories/ormRepoCita.repository';
import { OrmRepoDoctor } from 'src/modules/doctor/infrastructure/typeorm/repositories/ormRepoDoctor.repository';
import { OrmRepoPaciente } from '../repositories/ormRepoPaciente.repository';
import { PacienteEntity } from 'src/modules/paciente/domain/entities/paciente';
import { BuscarPacienteNombreService } from 'src/modules/paciente/application/services/buscarPacienteNombre.service';
import { BuscarPacienteApellidoService } from 'src/modules/paciente/application/services/buscarPacienteApellido.service';
import { BuscarPacienteSegundoApellidoService } from 'src/modules/paciente/application/services/buscarPacienteSegundoApellido.service';
import { BuscarPacienteIDService } from 'src/modules/paciente/application/services/buscarPacienteID.service';
import { BuscarPacienteNumeroService } from 'src/modules/paciente/application/services/buscarPacienteNumero.service';
import { BuscarPacientesService } from 'src/modules/paciente/application/services/buscarPacientes.service';
import { SuspenderPacienteService } from 'src/modules/paciente/application/services/suspenderPaciente.service';
import { BloquearPacienteService } from 'src/modules/paciente/application/services/bloquearPaciente.service';
import { BuscarPacienteSegundoNombreService } from 'src/modules/paciente/application/services/buscarPacienteSegundoNombre.service';
import { RegistrarPacienteService } from 'src/modules/paciente/application/services/registrarPaciente.service';
import { EncontrarPacientesPorDoctorService } from 'src/modules/paciente/application/services/buscarPacientesPorDoctor.service';
import { BuscarPacienteCorreoService } from 'src/modules/paciente/application/services/buscarPacienteCorreo.service';

@Controller('api/paciente')
export class PacienteController {
  private readonly ormRepoCita: OrmRepoCita;
  private readonly ormRepoDoctor: OrmRepoDoctor;
  private readonly ormRepoPaciente: OrmRepoPaciente;

  constructor(private readonly manager: EntityManager) {
    this.ormRepoCita = this.manager.getCustomRepository(OrmRepoCita);
    this.ormRepoDoctor = this.manager.getCustomRepository(OrmRepoDoctor);
    this.ormRepoPaciente = this.manager.getCustomRepository(OrmRepoPaciente);
  }

  @Get('Todos')
  async encontrarTodos(): Promise<PacienteEntity[]> {
    const servicio = new BuscarPacientesService(this.ormRepoPaciente);
    return await servicio.execute();
  }

  @Get('PorId:id_paciente')
  async buscarPacienteID(
    @Param('id_paciente') id_paciente: string,
  ): Promise<PacienteEntity> {
    const servicio = new BuscarPacienteIDService(this.ormRepoPaciente);
    return await servicio.execute(id_paciente);
  }

  @Get('PorNombre:primerNombre')
  async buscarPacienteNombre(
    @Param('primerNombre') primerNombre: string,
  ): Promise<PacienteEntity[]> {
    const servicio = new BuscarPacienteNombreService(this.ormRepoPaciente);
    return await servicio.execute(primerNombre);
  }

  @Get('PorSegundoNombre:segundoNombre')
  async buscarPacienteSegundoNombre(
    @Param('segundoNombre') segundoNombre: string,
  ): Promise<PacienteEntity[]> {
    const servicio = new BuscarPacienteSegundoNombreService(
      this.ormRepoPaciente,
    );
    return await servicio.execute(segundoNombre);
  }

  @Get('PorApellido:primerApellido')
  async buscarPacienteApellido(
    @Param('primerApellido') primerApellido: string,
  ): Promise<PacienteEntity[]> {
    const servicio = new BuscarPacienteApellidoService(this.ormRepoPaciente);
    return await servicio.execute(primerApellido);
  }

  @Get('PorSegundoApellido:segundoApellido')
  async buscarPacienteSegundoApellido(
    @Param('segundoApellido') segundoApellido: string,
  ): Promise<PacienteEntity[]> {
    const servicio = new BuscarPacienteSegundoApellidoService(
      this.ormRepoPaciente,
    );
    return await servicio.execute(segundoApellido);
  }

  @Get('PorNumero:numeroMovil')
  async buscarPacienteNumero(
    @Param('numeroMovil') numeroMovil: string,
  ): Promise<PacienteEntity> {
    const servicio = new BuscarPacienteNumeroService(this.ormRepoPaciente);
    return await servicio.execute(numeroMovil);
  }

  @Get('PorDoctor:id_doctor')
  async encontrarPacientesPorDoctor(
    @Param('id_doctor') id_doctor: string,
  ): Promise<PacienteEntity[]> {
    return await this.ormRepoCita.encontrarPacientesPorDoctor(id_doctor);
  }

  @Get('PorCorreo:correo')
  async buscarPacientePorCorreo(
    @Param('correo') correo: string,
  ): Promise<PacienteEntity> {
    const servicio = new BuscarPacienteCorreoService(this.ormRepoPaciente);
    return await servicio.execute(correo);
  }

  @Post('Registrar')
  async registrarPaciente(@Body() para): Promise<PacienteEntity> {
    const servicio = new RegistrarPacienteService(this.ormRepoPaciente);
    return await servicio.execute(
      para.id_paciente,
      para.usuario,
      para.contrasena,
      para.primerNombre,
      para.segundoNombre,
      para.primerApellido,
      para.segundoApellido,
      para.genero,
      para.altura,
      para.correo,
      para.numeroMovil,
      para.fechaNacimiento,
      para.alergia,
      para.operacion,
      para.peso,
      para.antecedente,
    );
  }

  @Put('Suspender')
  async suspenderPaciente(@Body() para): Promise<PacienteEntity> {
    const servicio = new SuspenderPacienteService(
      this.ormRepoPaciente,
      this.ormRepoDoctor,
    );
    return await servicio.execute(para.id_doctor, para.id_paciente);
  }

  @Put('Bloquear')
  async bloquearPaciente(@Body() para): Promise<PacienteEntity> {
    const servicio = new BloquearPacienteService(
      this.ormRepoPaciente,
      this.ormRepoDoctor,
    );
    return await servicio.execute(para.id_doctor, para.id_paciente, para.razon);
  }
}
