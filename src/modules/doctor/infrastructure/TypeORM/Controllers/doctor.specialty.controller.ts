import { Controller, Get, Param } from '@nestjs/common';
import { Doctor } from '../Entities/doctor.entity';
import { DoctorBaseService } from '../Services/doctor.base.service';
import { DoctorSpecialtyService } from '../Services/doctor.specialty.service';
import { DoctorBaseController } from './doctor.base.controller';

@Controller('api/doctorSpecialty')
export class DoctorSpecialtyController extends DoctorBaseController {
  constructor(doctorSpecialtyService: DoctorSpecialtyService) {
    super(doctorSpecialtyService);
  }

  getService(): DoctorBaseService {
    return this.doctorBaseService;
  }

  @Get('by:id_specialty')
  async findBy(@Param('id_specialty') by: number): Promise<Doctor[]> {
    return await this.getService().findBy(by);
  }
}
