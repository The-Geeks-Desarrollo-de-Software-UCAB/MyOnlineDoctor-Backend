import { EntityRepository, Repository } from 'typeorm';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/entities/specialty.entity';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(Especialidad)
export class OrmRepoEspecialidad extends Repository<Especialidad> {
  async encontrarUnaOFallar(id_especialidad: number): Promise<Especialidad> {
    return super.findOne({ where: { id_especialidad: id_especialidad } });
  }
}
