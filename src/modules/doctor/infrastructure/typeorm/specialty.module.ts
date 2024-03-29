import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/entities/specialty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Especialidad])],
})
export class SpecialtyModule { }
