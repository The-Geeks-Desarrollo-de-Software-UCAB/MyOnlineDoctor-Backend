import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorSpecialtyController } from './controllers/doctor.specialty.controller';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { DoctorSpecialtyService } from './services/doctor.specialty.service';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/entities/specialty.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Especialidad])],
  providers: [DoctorSpecialtyService],
  controllers: [DoctorSpecialtyController],
})
export class DoctorModule {}
