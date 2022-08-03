import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from '../cita/infrastructure/typeorm/entities/cita.entity';
import { Doctor } from '../doctor/infrastructure/typeorm/entities/doctor.entity';
import { Especialidad } from '../doctor/infrastructure/typeorm/entities/specialty.entity';
import { Paciente } from '../paciente/infrastructure/typeorm/entities/paciente.entity';
import { Registro } from '../registro/infrastructure/typeorm/entities/registro.entity';
import { VideollamadaController } from './infrastructure/typeorm/controller/videollamada.controller';
import { Token } from './infrastructure/typeorm/entities/token.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([Cita, Doctor, Especialidad, Paciente, Registro, Token]),
    ],
    providers: [],
    controllers: [VideollamadaController],
  })
export class VideollamadaModule {

}
