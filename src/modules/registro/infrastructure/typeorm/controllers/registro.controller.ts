import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { OrmRepoCita } from 'src/modules/cita/infrastructure/typeorm/repositories/ormRepoCita.repository';
import { OrmRepoDoctor } from 'src/modules/doctor/infrastructure/typeorm/repositories/ormRepoDoctor.repository';
import { OrmRepoPaciente } from 'src/modules/paciente/infrastructure/typeorm/repositories/ormRepoPaciente.repository';
import { OrmRepoRegistro } from 'src/modules/registro/infrastructure/typeorm/repositories/ormRepoRegistro.repository';
import { RegistroEntity } from 'src/modules/registro/domain/entities/registro';
import { EncontrarRegistrosService } from 'src/modules/registro/application/services/encontrarRegistros.service';
import { EncontrarRegistroPorDoctorService } from 'src/modules/registro/application/services/encontrarRegistroPorDoctor.service';
import { EncontrarRegistroPorPacienteService } from 'src/modules/registro/application/services/encontrarRegistroPorPaciente.service';
import { EncontrarRegistroPorCitaService } from 'src/modules/registro/application/services/encontrarRegistroPorCita.service';
import { CrearRegistroService } from 'src/modules/registro/application/services/crearRegistro.service';

@Controller('api/registro')
export class RegistroController {
  private readonly ormRepoCita: OrmRepoCita;
  private readonly ormRepoDoctor: OrmRepoDoctor;
  private readonly ormRepoPaciente: OrmRepoPaciente;
  private readonly ormRepoRegistro: OrmRepoRegistro;

  constructor(private readonly manager: EntityManager) {
    this.ormRepoCita = this.manager.getCustomRepository(OrmRepoCita);
    this.ormRepoDoctor = this.manager.getCustomRepository(OrmRepoDoctor);
    this.ormRepoPaciente = this.manager.getCustomRepository(OrmRepoPaciente);
    this.ormRepoRegistro = this.manager.getCustomRepository(OrmRepoRegistro);
  }

  @Get('Todos')
  async encontrarTodos(): Promise<RegistroEntity[]> {
    const servicio = new EncontrarRegistrosService(this.ormRepoRegistro);
    return await servicio.execute();
  }

  @Get('PorCita:id_cita')
  async encontrarRegistroPorCita(
    @Param('id_cita') id_cita: string,
  ): Promise<RegistroEntity> {
    const servicio = new EncontrarRegistroPorCitaService(this.ormRepoRegistro);
    return await servicio.execute(id_cita);
  }

  @Get('PorDoctor:id_doctor')
  async encontrarRegistroPorDoctor(
    @Param('id_doctor') id_doctor: string,
  ): Promise<RegistroEntity[]> {
    const servicio = new EncontrarRegistroPorDoctorService(
      this.ormRepoRegistro,
    );
    return await servicio.execute(id_doctor);
  }

  @Get('PorPaciente:id_paciente')
  async encontrarRegistroPorPaciente(
    @Param('id_paciente') id_paciente: string,
  ): Promise<RegistroEntity[]> {
    const servicio = new EncontrarRegistroPorPacienteService(
      this.ormRepoRegistro,
    );
    return await servicio.execute(id_paciente);
  }

  @Post('Crear')
  async crearRegistro(@Body() para): Promise<RegistroEntity> {
    const servicio = new CrearRegistroService(
      this.ormRepoCita,
      this.ormRepoDoctor,
      this.ormRepoRegistro,
    );
    return await servicio.execute(
      para.id_registro,
      para.prescripcion,
      para.historia,
      para.diagnostico,
      para.plan,
      para.examen,
      para.id_cita,
      para.id_doctor,
    );
  }
}
