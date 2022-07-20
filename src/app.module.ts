import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { CitaModule } from 'src/modules/cita/infrastructure/TypeORM/cita.module';
import { DoctorModule } from 'src/modules/doctor/infrastructure/TypeORM/doctor.module';
import { SpecialtyModule } from 'src/modules/doctor/infrastructure/TypeORM/specialty.module';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/Entities/cita.entity';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/Entities/specialty.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/Entities/doctor.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Tesa15600*',
      database: 'myonlinedoctor',
      entities: [Cita, Especialidad, Paciente, Doctor],
      autoLoadEntities: true,
    }),
    DoctorModule,
    SpecialtyModule,
    CitaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
