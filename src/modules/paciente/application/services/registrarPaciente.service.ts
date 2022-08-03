import { ArgumentInvalidException } from 'src/modules/base/domain/exceptions/argument-invalid.exception';
import { IRepoPaciente } from 'src/modules/paciente/application/IRepoPaciente.repository';
import { PacienteEntity } from '../../domain/entities/paciente';

export class RegistrarPacienteService {
  constructor(private readonly repoPaciente: IRepoPaciente) {}

  async execute(
    id_paciente: string,
    usuario: string,
    contrasena: string,
    primerNombre: string,
    segundoNombre: string,
    primerApellido: string,
    segundoApellido: string,
    genero: string,
    altura: number,
    correo: string,
    numeroMovil: string,
    fechaNacimiento: Date,
    alergia: string,
    operacion: string,
    peso: number,
    antecedente: string,
  ): Promise<PacienteEntity> {
    if (new Date(fechaNacimiento) > new Date(Date.now())) {
      throw new ArgumentInvalidException(
        'la fecha de nacimiento de un paciente no puede ser mayor a la fecha actual',
      );
    }
    let paciente = PacienteEntity.create(
      id_paciente,
      correo,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      alergia,
      altura,
      antecedente,
      fechaNacimiento,
      genero,
      numeroMovil,
      operacion,
      usuario,
      contrasena,
      peso,
    );
    return await this.repoPaciente.guardarPaciente(paciente);
  }
}
