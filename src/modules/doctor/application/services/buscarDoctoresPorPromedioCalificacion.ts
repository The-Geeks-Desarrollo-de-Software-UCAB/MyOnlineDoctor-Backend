import { IRepoDoctor } from 'src/modules/doctor/application/IRepoDoctor.repository';
import { DoctorEntity } from '../../domain/entities/doctor';

export class BuscarDoctoresPorPromedioCalificacionService {
    constructor(private readonly repoDoctor: IRepoDoctor) {}
    
    async execute(): Promise<DoctorEntity[]> {
        return await this.repoDoctor.encontrarTodosOrdenarPorPromedioCalificacion();
    }
}