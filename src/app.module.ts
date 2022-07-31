import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { CitaModule } from 'src/modules/cita/infrastructure/typeorm/cita.module';
import { DoctorModule } from 'src/modules/doctor/infrastructure/typeorm/doctor.module';
import { SpecialtyModule } from 'src/modules/doctor/infrastructure/typeorm/specialty.module';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/Entities/cita.entity';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/entities/specialty.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { RegistroModule } from './modules/registro/registro.module';
import config from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    DoctorModule,
    SpecialtyModule,
    CitaModule,
    RegistroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
