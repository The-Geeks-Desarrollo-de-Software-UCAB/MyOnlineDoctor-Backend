import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { DoctorEntity } from 'src/modules/doctor/domain/entities/doctor';
import { Especialidad } from '../entities/specialty.entity';
import { OrmRepoCita } from 'src/modules/cita/infrastructure/typeorm/repositories/ormRepoCita.repository';
import { OrmRepoDoctor } from 'src/modules/doctor/infrastructure/typeorm/repositories/ormRepoDoctor.repository';
import { OrmRepoEspecialidad } from '../repositories/ormRepoEspecialidad.repository';
import { BuscarDoctoresService } from 'src/modules/doctor/application/services/buscarDoctores.service';
import { BuscarDoctorPorIdService } from 'src/modules/doctor/application/services/buscarDoctorPorId.service';
import { BuscarDoctorNombreService } from 'src/modules/doctor/application/services/buscarDoctorNombre.service';
import { BuscarDoctorSegundoNombreService } from 'src/modules/doctor/application/services/buscarDoctorSegundoNombre.service';
import { BuscarDoctorApellidoService } from 'src/modules/doctor/application/services/buscarDoctorApellido.service';
import { BuscarDoctorSegundoApellidoService } from 'src/modules/doctor/application/services/buscarDoctorSegundoApellido.service';
import { BloquearDoctorService } from 'src/modules/doctor/application/services/bloquearDoctor.service';

@Controller('api/doctor')
export class DoctorController {
  private readonly ormRepoCita: OrmRepoCita;
  private readonly ormRepoDoctor: OrmRepoDoctor;
  private readonly ormRepoEspecialidad: OrmRepoEspecialidad;

  constructor(private readonly manager: EntityManager) {
    this.ormRepoCita = this.manager.getCustomRepository(OrmRepoCita);
    this.ormRepoDoctor = this.manager.getCustomRepository(OrmRepoDoctor);
    this.ormRepoEspecialidad =
      this.manager.getCustomRepository(OrmRepoEspecialidad);
  }

  @Get('Todos')
  async encontrarTodos(): Promise<DoctorEntity[]> {
    const servicio = new BuscarDoctoresService(this.ormRepoDoctor);
    return await servicio.execute();
  }

  @Get('PorId:id_doctor')
  async buscarDoctorPorId(
    @Param('id_doctor') id_doctor: string,
  ): Promise<DoctorEntity> {
    const servicio = new BuscarDoctorPorIdService(this.ormRepoDoctor);
    return await servicio.execute(id_doctor);
  }

  @Get('PorNombre:primerNombre')
  async buscarDoctorNombre(
    @Param('primerNombre') primerNombre: string,
  ): Promise<DoctorEntity[]> {
    const servicio = new BuscarDoctorNombreService(this.ormRepoDoctor);
    return await servicio.execute(primerNombre);
  }

  @Get('PorSegundoNombre:segundoNombre')
  async buscarDoctorSegundoNombre(
    @Param('segundoNombre') segundoNombre: string,
  ): Promise<DoctorEntity[]> {
    const servicio = new BuscarDoctorSegundoNombreService(this.ormRepoDoctor);
    return await servicio.execute(segundoNombre);
  }

  @Get('PorApellido:primerApellido')
  async buscarDoctorApellido(
    @Param('primerApellido') primerApellido: string,
  ): Promise<DoctorEntity[]> {
    const servicio = new BuscarDoctorApellidoService(this.ormRepoDoctor);
    return await servicio.execute(primerApellido);
  }

  @Get('PorSegundoApellido:segundoApellido')
  async buscarDoctorSegundoApellido(
    @Param('segundoApellido') segundoApellido: string,
  ): Promise<DoctorEntity[]> {
    const servicio = new BuscarDoctorSegundoApellidoService(this.ormRepoDoctor);
    return await servicio.execute(segundoApellido);
  }

  @Get('PorEspecialidad:id_especialidad')
  async encontrarPorEspecialidad(
    @Param('id_especialidad') id_especialidad: number,
  ): Promise<DoctorEntity[]> {
    return await this.ormRepoDoctor.encontrarPorEspecialidad(id_especialidad);
  }

  @Get('Especialidades')
  async encontrarEspecialidades(): Promise<Especialidad[]> {
    return await this.ormRepoEspecialidad.encontrarTodas();
  }

  @Put('Bloquear')
  async bloquearDoctor(@Body() para): Promise<DoctorEntity> {
    const servicio = new BloquearDoctorService(this.ormRepoDoctor);
    return await servicio.execute(para.id_doctor, para.razon);
  }
}
