import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class BuscarPacienteCorreoService {
    constructor(private readonly repoPaciente: IRepoPaciente) {}
    
    async execute(correo: string): Promise<PacienteEntity> {
        return await this.repoPaciente.encontrarPorCorreo(correo);
    }
}