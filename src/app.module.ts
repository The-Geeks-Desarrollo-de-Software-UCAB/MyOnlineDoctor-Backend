import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { CitaModule } from 'src/modules/cita/infrastructure/typeorm/cita.module';
import { DoctorModule } from 'src/modules/doctor/infrastructure/typeorm/doctor.module';
import { SpecialtyModule } from 'src/modules/doctor/infrastructure/typeorm/specialty.module';
import { RegistroModule } from './modules/registro/infrastructure/registro.module';
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
