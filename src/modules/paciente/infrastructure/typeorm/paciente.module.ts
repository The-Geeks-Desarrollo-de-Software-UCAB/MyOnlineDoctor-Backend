import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente])],
})
export class PacienteModule { }
