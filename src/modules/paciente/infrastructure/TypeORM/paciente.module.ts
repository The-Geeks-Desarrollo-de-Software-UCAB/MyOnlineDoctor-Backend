import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';
import { PacienteController } from './Controllers/paciente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente])],
  providers: [],
  controllers: [PacienteController],
})
export class PacienteModule {}

