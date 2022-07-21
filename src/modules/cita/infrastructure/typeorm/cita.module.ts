import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitaController } from './Controllers/cita.controller';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/Entities/cita.entity';
import { CitaService } from './Services/cita.service';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/entities/specialty.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cita, Paciente, Doctor, Especialidad])],
  providers: [CitaService],
  controllers: [CitaController],
})
export class CitaModule { }
