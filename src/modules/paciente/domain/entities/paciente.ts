import { AggregateRoot } from 'src/modules/base/domain/entities/aggregate-root.base';
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
import { SuscripcionCanceladaDomainEvent } from '../events/suscripcion-cancelada.domain-event';
import { PacienteBloqueadoDomainEvent } from '../events/paciente-bloqueado.domain-event';
import { SuscripcionModificadaDomainEvent } from '../events/suscripcion-modificada.domain-event';
import { SuscripcionSuspendidaDomainEvent } from '../events/suscripcion-suspendida.domain-event';
import { PacienteCreadoDomainEvent } from '../events/paciente-creado.domain-event';
import { Usuario } from '../value-objects/usuario.value-object';

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
    private _usuario: Usuario,
    private _password: Password,
    private _peso: Peso,
    private _estadoSuscripcion: EstadoSuscripcion = EstadoSuscripcion.ACTIVA,
  ) {
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
    this._usuario = _usuario;
    this._password = _password;
    this._peso = _peso;
    this._estadoSuscripcion = _estadoSuscripcion;
    this.agregarEvento(new PacienteCreadoDomainEvent(this._idPaciente.id));
  }

  static create(
    paciente_id: string,
    correo: string,
    nombre: string,
    segnombre: string,
    apellido: string,
    segapellido: string,
    alergia: string,
    altura: number,
    antecedente: string,
    fechaNacimiento: Date,
    genero: string,
    numeroMovil: string,
    operacion: string,
    usuario: string,
    password: string,
    peso: number,
  ): PacienteEntity {
    let id_paciente = new IdPaciente(paciente_id);
    let correoPaciente = new Correo(correo);
    let nombrePaciente = new Nombre(nombre, segnombre);
    let apellidoPaciente = new Apellido(apellido, segapellido);
    let alergiaPaciente = new Alergia(alergia);
    let alturaPaciente = new Altura(altura);
    let antecedentePaciente = new Antecedente(antecedente);
    let fechaPaciente = new FechaNacimiento(fechaNacimiento);
    let generoPaciente = new Genero(genero);
    let numeroPaciente = new NumeroMovil(numeroMovil);
    let operacionPaciente = new Operacion(operacion);
    let passwordPaciente = new Password(password);
    let pesoPaciente = new Peso(peso);
    let estadoPaciente = EstadoSuscripcion.ACTIVA;
    let usuarioPaciente = new Usuario(usuario);
    return new PacienteEntity(
      id_paciente,
      correoPaciente,
      nombrePaciente,
      apellidoPaciente,
      alergiaPaciente,
      alturaPaciente,
      antecedentePaciente,
      fechaPaciente,
      generoPaciente,
      numeroPaciente,
      operacionPaciente,
      usuarioPaciente,
      passwordPaciente,
      pesoPaciente,
      estadoPaciente,
    );
  }

  get idPaciente(): IdPaciente {
    return this._idPaciente;
  }

  get correo(): Correo {
    return this._correo;
  }

  get nombre(): Nombre {
    return this._nombre;
  }

  get apellido(): Apellido {
    return this._apellido;
  }

  get alergia(): Alergia {
    return this._alergia;
  }

  get altura(): Altura {
    return this._altura;
  }

  get antecedente(): Antecedente {
    return this._antecedente;
  }

  get fechaNacimiento(): FechaNacimiento {
    return this._fechaNacimiento;
  }

  get genero(): Genero {
    return this._genero;
  }

  get numeroMovil(): NumeroMovil {
    return this._numeroMovil;
  }

  get operacion(): Operacion {
    return this._operacion;
  }

  public get usuario(): Usuario {
    return this._usuario;
  }

  get password(): Password {
    return this._password;
  }

  get peso(): Peso {
    return this._peso;
  }

  get estadoSuscripcion(): EstadoSuscripcion {
    return this._estadoSuscripcion;
  }

  cancelarSuscripcion(): void {
    this._estadoSuscripcion = EstadoSuscripcion.CANCELADA;
    this.agregarEvento(
      new SuscripcionCanceladaDomainEvent(this._idPaciente.id),
    );
  }

  bloquearSuscripcion(razon: string): void {
    this._estadoSuscripcion = EstadoSuscripcion.BLOQUEADA;
    this.agregarEvento(
      new PacienteBloqueadoDomainEvent(this._idPaciente.id, razon),
    );
  }

  activarSuscripcion(): void {
    this._estadoSuscripcion = EstadoSuscripcion.ACTIVA;
    this.agregarEvento(
      new SuscripcionModificadaDomainEvent(this._idPaciente.id),
    );
  }

  suspenderSuscripcion(): void {
    this._estadoSuscripcion = EstadoSuscripcion.SUSPENDIDA;
    this.agregarEvento(
      new SuscripcionSuspendidaDomainEvent(this._idPaciente.id),
    );
  }
}
