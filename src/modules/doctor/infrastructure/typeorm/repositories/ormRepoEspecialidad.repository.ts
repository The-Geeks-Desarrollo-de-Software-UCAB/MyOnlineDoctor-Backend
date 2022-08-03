import { EntityRepository, Repository } from 'typeorm';
import { Especialidad } from 'src/modules/doctor/infrastructure/typeorm/entities/specialty.entity';

@EntityRepository(Especialidad)
export class OrmRepoEspecialidad extends Repository<Especialidad> {
  async encontrarTodas(): Promise<Especialidad[]> {
    return await super.find();
  }
  async encontrarPorId(id_especialidad: number): Promise<Especialidad> {
    return await super.findOne({ where: { id_especialidad: id_especialidad } });
  }
}
