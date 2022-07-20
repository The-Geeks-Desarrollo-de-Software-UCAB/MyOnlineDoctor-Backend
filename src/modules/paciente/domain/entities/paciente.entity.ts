import { AggregateRoot } from 'src/modules/base/domain/entities/aggregate-root.base'
import { Nombre } from '../value-objects/nombre.value-object';
import { Correo } from '../value-objects/correo.value-object';
import { Apellido } from '../value-objects/apellido.value-object';
import { Alergia } from '../value-objects/alergia.value-object';
import { Altura } from '../value-objects/altura.value-object';
import { Antecedente } from '../value-objects/antecedente.value-object';
import { EstadoSuscripcion } from '../value-objects/estadosuscripcion.value-object';
import { FechaNacimiento } from '../value-objects/fechanacimiento.value-object';
import { Genero } from '../value-objects/genero.value-object';
import { NumeroMovil } from '../value-objects/numeromovil.value-object';
import { Operacion } from '../value-objects/operacion.value-object';
import { Password } from '../value-objects/password.value-object';
import { Peso } from '../value-objects/peso.value-object';
import { IdPaciente } from '../value-objects/idPaciente.value-object';
import { decoLog } from 'src/modules/decorators/logging-decorator';

export class PacienteEntity extends AggregateRoot {
 
  constructor(
  private _idPaciente: IdPaciente,
  private _correo: Correo,
  private _nombre: Nombre,
  private _apellido: Apellido,
  private _alergia: Alergia,
  private _altura: Altura,
  private _antecedente: Antecedente,
  private _fechaNacimiento: FechaNacimiento,
  private _genero: Genero,
  private _numeroMovil: NumeroMovil,
  private _operacion: Operacion,
  private _password: Password,
  private _peso: Peso,
  private _estadoSuscripcion: EstadoSuscripcion) {
    super();
    this._idPaciente = _idPaciente;
    this._correo = _correo;
    this._nombre = _nombre;
    this._apellido = _apellido;
    this._alergia = _alergia;
    this._altura = _altura;
    this._antecedente = _antecedente;
    this._fechaNacimiento = _fechaNacimiento;
    this._genero = _genero;
    this._numeroMovil = _numeroMovil;
    this._operacion = _operacion;
    this._password = _password;
    this._peso = _peso;
    this._estadoSuscripcion = _estadoSuscripcion;
  }

  @decoLog()
  get idPaciente(): IdPaciente {
    return this._idPaciente;
  }

  @decoLog()
  get correo(): Correo {
    return this._correo;
  }

  @decoLog()
  get nombre(): Nombre {
    return this._nombre;
  }

  @decoLog()
  get apellido(): Apellido {
    return this._apellido;
  }

  @decoLog()
  get alergia(): Alergia {
    return this._alergia;
  }

  @decoLog()
  get altura(): Altura {
    return this._altura;
  }

  @decoLog()
  get antecedente(): Antecedente {
    return this._antecedente;
  }

  @decoLog()
  get fechaNacimiento(): FechaNacimiento {
    return this._fechaNacimiento;
  }

  @decoLog()
  get genero(): Genero {
    return this._genero;
  }

  @decoLog()
  get numeroMovil(): NumeroMovil {
    return this._numeroMovil;
  }

  @decoLog()
  get operacion(): Operacion {
    return this._operacion;
  }

  @decoLog()
  get password(): Password {
    return this._password;
  }

  @decoLog()
  get peso(): Peso {
    return this._peso;
  }

  @decoLog()
  get estadoSuscripcion(): EstadoSuscripcion {
    return this._estadoSuscripcion;
  }

  @decoLog()
  cancelarSuscripcion(): void {
    this._estadoSuscripcion = EstadoSuscripcion.CANCELADA;
  }

  @decoLog()
  bloquearSuscripcion(): void {
    this._estadoSuscripcion = EstadoSuscripcion.BLOQUEADA;
  }

  @decoLog()
  activarSuscripcion(): void {
    this._estadoSuscripcion = EstadoSuscripcion.ACTIVA;
  }

  @decoLog()
  suspenderSuscripcion(): void {
    this._estadoSuscripcion = EstadoSuscripcion.SUSPENDIDA;
  }


}
