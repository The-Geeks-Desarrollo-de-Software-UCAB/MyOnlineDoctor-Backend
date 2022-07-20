import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente])],
})
export class PacienteModule {}
