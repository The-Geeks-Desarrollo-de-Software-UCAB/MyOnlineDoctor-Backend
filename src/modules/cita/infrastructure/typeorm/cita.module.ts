import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitaController } from './controllers/cita.controller';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/entities/cita.entity';
import { CitaService } from './services/cita.service';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/entities/specialty.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cita, Paciente, Doctor, Especialidad])],
  providers: [], //tal vez va cita service aca
  controllers: [CitaController],
})
export class CitaModule {}
