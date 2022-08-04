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
import { DoctorDto } from '../dto/doctor.dto';
import { BuscarDoctoresPorPromedioCalificacionService } from 'src/modules/doctor/application/services/buscarDoctoresPorPromedioCalificacion';
import { BuscarDoctorUsuarioService } from '../../../application/services/buscarDoctorUsuario.service';

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
  async encontrarTodos(): Promise<DoctorDto[]> {
    const servicio = new BuscarDoctoresService(this.ormRepoDoctor);
    const doctores = await servicio.execute();
    return await DoctorDto.create(doctores);
  }

  @Get('PorId:id_doctor')
  async buscarDoctorPorId(
    @Param('id_doctor') id_doctor: string,
  ): Promise<DoctorDto[]> {
    const servicio = new BuscarDoctorPorIdService(this.ormRepoDoctor);
    const doctor: DoctorEntity[] = [];
    doctor.push(await servicio.execute(id_doctor));
    return await DoctorDto.create(doctor);
  }

  @Get('PorNombre:primerNombre')
  async buscarDoctorNombre(
    @Param('primerNombre') primerNombre: string,
  ): Promise<DoctorDto[]> {
    const servicio = new BuscarDoctorNombreService(this.ormRepoDoctor);
    const doctores = await servicio.execute(primerNombre);
    return await DoctorDto.create(doctores);
  }

  @Get('PorSegundoNombre:segundoNombre')
  async buscarDoctorSegundoNombre(
    @Param('segundoNombre') segundoNombre: string,
  ): Promise<DoctorDto[]> {
    const servicio = new BuscarDoctorSegundoNombreService(this.ormRepoDoctor);
    const doctores = await servicio.execute(segundoNombre);
    return await DoctorDto.create(doctores);
  }

  @Get('PorApellido:primerApellido')
  async buscarDoctorApellido(
    @Param('primerApellido') primerApellido: string,
  ): Promise<DoctorDto[]> {
    const servicio = new BuscarDoctorApellidoService(this.ormRepoDoctor);
    const doctores = await servicio.execute(primerApellido);
    return await DoctorDto.create(doctores);
  }

  @Get('PorSegundoApellido:segundoApellido')
  async buscarDoctorSegundoApellido(
    @Param('segundoApellido') segundoApellido: string,
  ): Promise<DoctorDto[]> {
    const servicio = new BuscarDoctorSegundoApellidoService(this.ormRepoDoctor);
    const doctores = await servicio.execute(segundoApellido);
    return await DoctorDto.create(doctores);
  }

  @Get('PorEspecialidad:id_especialidad')
  async encontrarPorEspecialidad(
    @Param('id_especialidad') id_especialidad: number,
  ): Promise<DoctorDto[]> {
    const doctores = await this.ormRepoDoctor.encontrarPorEspecialidad(
      id_especialidad,
    );
    return await DoctorDto.create(doctores);
  }

  @Get('PorCalificacion')
  async encontrarTodosPorPromedioCalificacion(): Promise<DoctorDto[]> {
    const servicio = new BuscarDoctoresPorPromedioCalificacionService(this.ormRepoDoctor);
    const doctores = await servicio.execute();
    return await DoctorDto.create(doctores);
  }

  @Get('Especialidades')
  async encontrarEspecialidades(): Promise<Especialidad[]> {
    return await this.ormRepoEspecialidad.encontrarTodas();
  }

  @Get('PorUsuario:usuario')
  async buscarDoctorPorUsuario(
    @Param('usuario') usuario: string,
  ): Promise<DoctorDto[]> {
    const servicio = new BuscarDoctorUsuarioService(this.ormRepoDoctor);
    const doctores: DoctorEntity[] = [];
    doctores.push(await servicio.execute(usuario));
    return await DoctorDto.create(doctores);
  }

  @Put('Bloquear')
  async bloquearDoctor(@Body() para): Promise<DoctorDto[]> {
    const servicio = new BloquearDoctorService(this.ormRepoDoctor);
    const doctor: DoctorEntity[] = [];
    doctor.push(await servicio.execute(para.id_doctor, para.razon));
    return await DoctorDto.create(doctor);
  }
}
