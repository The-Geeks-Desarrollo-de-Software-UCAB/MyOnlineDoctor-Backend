import { Repository } from 'typeorm';
import { Doctor } from '../entities/doctor.entity';

export interface DoctorBaseService {
  getRepository(): Repository<Doctor>;

  findAll(): Promise<Doctor[]>;

  findBy(by: any): Promise<Doctor[]>;
}
