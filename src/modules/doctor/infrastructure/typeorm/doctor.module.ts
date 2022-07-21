import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorSpecialtyController } from './Controllers/doctor.specialty.controller';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { DoctorSpecialtyService } from './Services/doctor.specialty.service';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/entities/specialty.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Especialidad])],
  providers: [DoctorSpecialtyService],
  controllers: [DoctorSpecialtyController],
})
export class DoctorModule { }
