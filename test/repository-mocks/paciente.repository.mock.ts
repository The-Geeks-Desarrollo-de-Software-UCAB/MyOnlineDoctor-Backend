import { IRepoPaciente } from '../../src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../src/modules/paciente/domain/entities/paciente';

export class RepoPacienteMock
  implements IRepoPaciente
{

  private readonly pacientes: PacienteEntity[] = [];

  async encontrarTodos(): Promise<PacienteEntity[]> {
    return this.pacientes;
  }

  async encontrarPorID(id_paciente: string): Promise<PacienteEntity> {
    for (let paciente of this.pacientes) {
        if (paciente.idPaciente.id === id_paciente) {
            return paciente;
        }
    }
  }

  async encontrarPorNombre(nombre: string): Promise<PacienteEntity[]> {
    return null;
  }

  async encontrarPorSegundoNombre(segundoNombre: string): Promise<PacienteEntity[]> {
    return null;
  }

  async encontrarPorApellido(apellido: string): Promise<PacienteEntity[]> {
    return null;
  }

  async encontrarPorSegundoApellido(segundoapellido: string): Promise<PacienteEntity[]> {
    return null;
  }

  async encontrarPorNumero(numero: string): Promise<PacienteEntity> {
    return null;
  }

  async encontrarPorCorreo(correo: string): Promise<PacienteEntity> {
    return null;
  }

  async guardarPaciente(paciente: PacienteEntity): Promise<PacienteEntity> {
    this.pacientes.push(paciente);
    return paciente;
  }
}
