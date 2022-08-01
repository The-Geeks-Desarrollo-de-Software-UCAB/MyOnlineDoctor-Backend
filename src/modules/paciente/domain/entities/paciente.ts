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

  private _idPaciente: IdPaciente;
  private _correo: Correo;
  private _nombre: Nombre;
  private _apellido: Apellido;
  private _alergia: Alergia;
  private _altura: Altura;
  private _antecedente: Antecedente;
  private _fechaNacimiento: FechaNacimiento;
  private _genero: Genero;
  private _numeroMovil: NumeroMovil;
  private _operacion: Operacion;
  private _password: Password;
  private _peso: Peso;
  private _estadoSuscripcion: EstadoSuscripcion;
  private _usuario: Usuario;

  constructor(
    idPaciente: IdPaciente,
    correo: Correo,
    nombre: Nombre,
    apellido: Apellido,
    alergia: Alergia,
    altura: Altura,
    antecedente: Antecedente,
    fechaNacimiento: FechaNacimiento,
    genero: Genero,
    numeroMovil: NumeroMovil,
    operacion: Operacion,
    password: Password,
    peso: Peso,
    estadoSuscripcion: EstadoSuscripcion.ACTIVA,
    usuario: Usuario,
  ) {
    super();
    this._idPaciente = idPaciente;
    this._correo = correo;
    this._nombre = nombre;
    this._apellido = apellido;
    this._alergia = alergia;
    this._altura = altura;
    this._antecedente = antecedente;
    this._fechaNacimiento = fechaNacimiento;
    this._genero = genero;
    this._numeroMovil = numeroMovil;
    this._operacion = operacion;
    this._password = password;
    this._peso = peso;
    this._estadoSuscripcion = estadoSuscripcion;
    this._usuario = usuario;
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
    password: string,
    peso: number,
    estadoSuscripcion: string,
    usuario: string,
  
  ): PacienteEntity {
    let id_paciente = new IdPaciente(paciente_id);
    let correoPaciente = new Correo(correo);
    let nombrePaciente = new Nombre(nombre,segnombre);
    let apellidoPaciente = new Apellido(apellido,segapellido);
    let alergiaPaciente = new Alergia(alergia);
    let alturaPaciente = new Altura(altura);
    let antecedentePaciente = new Antecedente(antecedente);
    let fechaPaciente = new FechaNacimiento(fechaNacimiento);
    let generoPaciente = new Genero(genero);
    let numeroPaciente = new NumeroMovil(numeroMovil);
    let operacionPaciente = new Operacion(operacion);
    let passwordPaciente = new Password(password);
    let pesoPaciente = new Peso(peso);
    let estadoPaciente = EstadoSuscripcion[EstadoSuscripcion.ACTIVA];
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
      passwordPaciente,
      pesoPaciente,
      estadoPaciente,
      usuarioPaciente
                 
    );
  }

  public get idPaciente(): string {
    return this._idPaciente.id;
  }

  public  get correo(): string {
    return this._correo.correo;
  }

  public get nombre(): string {
    return this._nombre.primerNombre;
  }

  public get segundonombre(): string {
    return this._nombre.segundoNombre;
  }

  public get apellido(): string {
    return this._apellido.primerApellido;
  }

  public get segundoapellido(): string {
    return this._apellido.segundoApellido;
  }

  public get alergia(): string {
    return this._alergia.alergia;
  }

  public get altura(): number {
    return this._altura.altura;
  }

  public  get antecedente(): string {
    return this._antecedente.antecedente;
  }

  public get fechaNacimiento(): Date {
    return this._fechaNacimiento.fechaNacimiento;
  }

  public get genero(): string {
    return this._genero.genero;
  }

  public get numeroMovil(): string {
    return this._numeroMovil.numeroMovil;
  }

  public get operacion(): string {
    return this._operacion.operacion;
  }

  public get password(): string {
    return this._password.password;
  }

  public get peso(): number {
    return this._peso.peso;
  }

  public  get estadoSuscripcion(): EstadoSuscripcion {
    return this._estadoSuscripcion;
  }

  public  get usuario(): string {
    return this._usuario.usuario;
  }

  public cancelarSuscripcion(): void {
    this._estadoSuscripcion = EstadoSuscripcion.CANCELADA;
    this.agregarEvento(
      new SuscripcionCanceladaDomainEvent(this._idPaciente.id),
    );
  }

  public bloquearSuscripcion(razon: string): void {
    this._estadoSuscripcion = EstadoSuscripcion.BLOQUEADA;
    this.agregarEvento(
      new PacienteBloqueadoDomainEvent(this._idPaciente.id, razon),
    );
  }

  public activarSuscripcion(): void {
    this._estadoSuscripcion = EstadoSuscripcion.ACTIVA;
    this.agregarEvento(
      new SuscripcionModificadaDomainEvent(this._idPaciente.id),
    );
  }

  public suspenderSuscripcion(): void {
    this._estadoSuscripcion = EstadoSuscripcion.SUSPENDIDA;
    this.agregarEvento(
      new SuscripcionSuspendidaDomainEvent(this._idPaciente.id),
    );
  }


  
}
