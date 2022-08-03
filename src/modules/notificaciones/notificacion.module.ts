import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from '../cita/infrastructure/typeorm/entities/cita.entity';
import { Doctor } from '../doctor/infrastructure/typeorm/entities/doctor.entity';
import { Especialidad } from '../doctor/infrastructure/typeorm/entities/specialty.entity';
import { Paciente } from '../paciente/infrastructure/typeorm/entities/paciente.entity';
import { Registro } from '../registro/infrastructure/typeorm/entities/registro.entity';
import { NotificacionController } from './infrastructure/typeorm/controller/notificacion.controller';
import { Dispositivo } from './infrastructure/typeorm/entities/dispositivo.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([Cita, Doctor, Especialidad, Paciente, Registro, Dispositivo]),
    ],
    providers: [],
    controllers: [NotificacionController],
  })
export class NotificacionModule {}
