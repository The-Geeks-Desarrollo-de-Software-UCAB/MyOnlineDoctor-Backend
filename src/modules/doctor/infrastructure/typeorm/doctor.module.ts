import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from 'src/modules/doctor/infrastructure/typeorm/entities/doctor.entity';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/entities/specialty.entity';
import { DoctorController } from './controllers/doctor.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Especialidad])],
  providers: [],
  controllers: [DoctorController],
})
export class DoctorModule {}
