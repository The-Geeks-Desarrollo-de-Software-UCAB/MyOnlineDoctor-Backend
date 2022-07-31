import { Get } from '@nestjs/common';
import { Doctor } from '../entities/doctor.entity';
import { DoctorBaseService } from '../services/doctor.base.service';

export abstract class DoctorBaseController {
  constructor(protected doctorBaseService: DoctorBaseService) {}

  abstract getService(): DoctorBaseService;

  @Get('all')
  async findAll(): Promise<Doctor[]> {
    return await this.getService().findAll();
  }

  abstract findBy(by: any): Promise<Doctor[]>;
}
