import { Repository } from 'typeorm';
import { Doctor } from '../Entities/doctor.entity';

export interface DoctorBaseService {
  getRepository(): Repository<Doctor>;

  findAll(): Promise<Doctor[]>;

  findBy(by: any): Promise<Doctor[]>;
}
