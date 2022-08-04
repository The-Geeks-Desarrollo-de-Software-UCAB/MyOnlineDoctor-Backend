import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroController } from 'src/modules/registro/infrastructure/typeorm/controllers/registro.controller';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/entities/cita.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/entities/specialty.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { Registro } from './typeorm/entities/registro.entity';
import { NotificacionService } from 'src/modules/notificaciones/infrastructure/typeorm/service/notificacion.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cita, Doctor, Especialidad, Paciente, Registro]),
  ],
  providers: [NotificacionService],
  controllers: [RegistroController],
})
export class RegistroModule {}
