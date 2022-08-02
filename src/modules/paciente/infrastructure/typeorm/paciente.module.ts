import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { PacienteController } from './controllers/paciente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente])],
  providers: [],
  controllers: [PacienteController],
})
export class PacienteModule {}
