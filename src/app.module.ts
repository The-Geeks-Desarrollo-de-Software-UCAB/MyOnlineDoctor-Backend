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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-54-87-179-4.compute-1.amazonaws.com',
      port: 5432,
      username: 'nffybrenogqxcl',
      password: '4e5846bf15c8108830b6ef209c7bbbfc551f9673522226f97d6199acc180bae8',
      database: 'd6o4rar9o3v525',
      autoLoadEntities: true,
      synchronize: true
    }),
    DoctorModule,
    SpecialtyModule,
    CitaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
