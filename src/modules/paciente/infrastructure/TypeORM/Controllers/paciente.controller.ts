import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { OrmRepoPaciente } from '../Repositories/ORMRepoPaciente.repository';
import { PacienteEntity } from 'src/modules/paciente/domain/entities/paciente';
import { BuscarPacienteNombreService } from 'src/modules/paciente/application/Services/buscarPacienteNombre.service';
import { BuscarPacienteApellidoService } from 'src/modules/paciente/application/Services/buscarPacienteApellido.service';
import { BuscarPacienteSegundoApellidoService } from 'src/modules/paciente/application/Services/buscarPacienteSegundoApellido.service';
import { BuscarPacienteIDService } from 'src/modules/paciente/application/Services/buscarPacienteID.service';
import { BuscarPacienteNumeroService } from 'src/modules/paciente/application/Services/buscarPacienteNumero.service';
import { BuscarPacienteService } from 'src/modules/paciente/application/Services/buscarPaciente.service';
import { SuspenderPacienteService } from 'src/modules/paciente/application/Services/suspenderPaciente.service';
import { BloquearPacienteService } from 'src/modules/paciente/application/Services/bloquearPaciente.service';
import { BuscarPacienteSegundoNombreService } from 'src/modules/paciente/application/Services/buscarPacienteSegundoNombre.service';

@Controller('api/paciente')
export class PacienteController {
  private readonly ormRepoPaciente: OrmRepoPaciente;

  constructor(private readonly manager: EntityManager) {
    this.ormRepoPaciente = this.manager.getCustomRepository(OrmRepoPaciente);
  }

  @Get('Todos')
  async encontrarTodos(): Promise<PacienteEntity[]> {
    const servicio = new BuscarPacienteService(this.ormRepoPaciente);
    return await servicio.execute();
  }

  @Get('PorID:id_paciente')
  async buscarPacienteID(
    @Param('id_paciente') id_paciente: string,
  ): Promise<PacienteEntity[]> {
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
    const servicio = new BuscarPacienteSegundoNombreService(this.ormRepoPaciente);
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
    const servicio = new BuscarPacienteSegundoApellidoService(this.ormRepoPaciente);
    return await servicio.execute(segundoApellido);
  }

  @Get('PorNumero:numeroMovil')
  async buscarPacienteNumero(
    @Param('numeroMovil') numeroMovil: string,
  ): Promise<PacienteEntity[]> {
    const servicio = new BuscarPacienteNumeroService(this.ormRepoPaciente);
    return await servicio.execute(numeroMovil);
  }

 /* @Put('Suspender')
  async suspenderPaciente(@Body() para): Promise<PacienteEntity> {
    const servicio = new SuspenderPacienteService(
      this.ormRepoPaciente,
    );
    return await servicio.execute(
      para.id_paciente,
      para.estadoSuscripcion,
    );
  }

  @Put('Bloquear')
  async bloquearPaciente(@Body() para): Promise<PacienteEntity> {
    const servicio = new BloquearPacienteService(
      this.ormRepoPaciente,
    );
    return await servicio.execute(
      para.id_paciente,
      para.estadoSuscripcion,
    );
  }*/
}

