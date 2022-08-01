import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from 'src/modules/paciente/infrastructure/Typeorm/Entities/paciente.entity';
import { decoLog } from 'src/modules/decorators/logging-decorator';
import { OrmRepoPaciente } from '../Repositories/ormRepoPaciente.repository';
import { PacienteEntity } from 'src/modules/paciente/domain/entities/paciente';

@Injectable()
export class PacienteService {
  
  constructor(
    @InjectRepository(Paciente) private pacienteRepo: Repository<Paciente>,
  ) {}

  async encontrarTodos(repoPaciente: OrmRepoPaciente): Promise<PacienteEntity[]> {
    return await repoPaciente.encontrarTodos();
  }

  async encontrarPorID(
    repoPaciente: OrmRepoPaciente,
    id_paciente: string,
  ): Promise<PacienteEntity[]> {
    
    return await repoPaciente.encontrarPorID(id_paciente);
  }
 
  async encontrarPorNombre(
    repoPaciente: OrmRepoPaciente,
    primerNombre: string,
  ): Promise<PacienteEntity[]> {
    
    return await repoPaciente.encontrarPorNombre(primerNombre);
  }

  async encontrarPorApellido(
    repoPaciente: OrmRepoPaciente,
    primerApellido: string,
  ): Promise<PacienteEntity[]> {
    
    return await repoPaciente.encontrarPorApellido(primerApellido);
  }

  async encontrarPorNumero(
    repoPaciente: OrmRepoPaciente,
    numeroMovil: string,
  ): Promise<PacienteEntity[]> {
    
    return await repoPaciente.encontrarPorNumero(numeroMovil);
  }
 
}
