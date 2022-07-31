import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { CitaModule } from 'src/modules/cita/infrastructure/typeorm/cita.module';
import { DoctorModule } from 'src/modules/doctor/infrastructure/typeorm/doctor.module';
import { SpecialtyModule } from 'src/modules/doctor/infrastructure/typeorm/specialty.module';
import { Cita } from 'src/modules/cita/infrastructure/typeorm/Entities/cita.entity';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/Entities/doctor.entity';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/Entities/specialty.entity';
import { Paciente } from 'src/modules/paciente/infrastructure/typeorm/Entities/paciente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Tesa15600*', //ingresen aca su clave
      database: 'myonlinedoctor',
      entities: [Cita, Doctor, Especialidad, Paciente],
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
