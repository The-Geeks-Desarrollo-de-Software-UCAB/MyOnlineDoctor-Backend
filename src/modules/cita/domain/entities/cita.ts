import { AggregateRoot } from 'src/modules/base/domain/entities/aggregate-root.base';
import { ArgumentInvalidException } from 'src/modules/base/domain/exceptions/argument-invalid.exception';
import { IdDoctor } from 'src/modules/doctor/domain/value-objects/idDoctor.value-object';
import { IdPaciente } from 'src/modules/paciente/domain/value-objects/idPaciente.value-object';
import { Calificacion } from '../value-objects/calificacion.value-object';
import { Duracion } from '../value-objects/duracion.value-object';
import { EstadoCita } from '../value-objects/estadoCita.value-object';
import { Fecha } from '../value-objects/fecha.value-object';
import { IdCita } from '../value-objects/idCita.value-object';
import { Motivo } from '../value-objects/motivo.value-object';
import { TipoCita } from '../value-objects/tipoCita.object-value';
import { CitaAgendada } from '../events/cita-agendada.domain-event';
import { CitaAceptada } from '../events/cita-aceptada.domain-event';
import { CitaSolicitada } from '../events/cita-solicitada.domain-event';
import { CitaCancelada } from '../events/cita-cancelada.domain-event';
import { CitaRechazada } from '../events/cita-rechazada.domain-event';
import { CitaFinalizada } from '../events/cita-finalizada.domain-event';
import { CitaIniciada } from '../events/cita-iniciada.domain-event';

export class CitaEntity extends AggregateRoot {
  private _identificador: IdCita;
  private _fecha?: Fecha;
  private _estado: EstadoCita;
  private _tipo: TipoCita;
  private _motivo: Motivo;
  private _duracion: Duracion;
  private _calificacion?: Calificacion;
  private _identificadorPaciente: IdPaciente;
  private _identificadorDoctor: IdDoctor;

  //se debe llamar a este constructor con la fecha deseada para la cita y
  //un object value motivo inicializado
  // de esta manera new Cita(new fecha(new Date()), new motivo('contexto'))

  constructor(
    identificador: IdCita,
    fecha: Fecha = null,
    estado: EstadoCita = EstadoCita.SOLICITADA,
    tipo: TipoCita,
    motivo: Motivo,
    duracion: Duracion,
    calificacion: Calificacion = null,
    idPaciente: IdPaciente,
    idDoctor: IdDoctor,
  ) {
    super();
    this._identificador = identificador;
    this._fecha = fecha;
    this._estado = estado;
    this._tipo = tipo;
    this._motivo = motivo;
    this._duracion = duracion;
    this._calificacion = calificacion;
    this._identificadorPaciente = idPaciente;
    this._identificadorDoctor = idDoctor;
    this.agregarEvento(new CitaSolicitada(this._identificador.id));
  }

  static create(
    cita_id: string,
    duracion: number,
    tipo: string,
    motivo: string,
    paciente_id: string,
    doctor_id: string,
  ): CitaEntity {
    let identificador = new IdCita(cita_id);
    let fecha = new Fecha(null);
    let estado = EstadoCita[EstadoCita.SOLICITADA];
    let tipoCita = TipoCita[tipo];
    let motivoCita = new Motivo(motivo);
    let duracionCita = new Duracion(duracion);
    let calificacionCita = new Calificacion(null);
    let idPaciente = new IdPaciente(paciente_id);
    let idDoctor = new IdDoctor(doctor_id);
    return new CitaEntity(
      identificador,
      fecha,
      estado,
      tipoCita,
      motivoCita,
      duracionCita,
      calificacionCita,
      idPaciente,
      idDoctor,
    );
  }

  public get id(): string {
    return this._identificador.id;
  }

  public get fecha(): Date {
    if (this._fecha.fecha == undefined) {
      return null;
    }
    return this._fecha.fecha;
  }

  public get estado(): EstadoCita {
    return this._estado;
  }

  public get tipo(): TipoCita {
    return this._tipo;
  }

  public get motivo(): string {
    return this._motivo.motivo;
  }

  public get duracion(): number {
    return this._duracion.duracion;
  }

  public get calificacion(): number {
    return this._calificacion.puntuacion;
  }

  get identificadorPaciente(): string {
    return this._identificadorPaciente.id;
  }

  get identificadorDoctor(): string {
    return this._identificadorDoctor.id;
  }

  public calificar(puntuacion: number): void {
    this._calificacion = new Calificacion(puntuacion);
  }

  public agendar(fecha: Fecha) {
    this.validate(fecha);
    this._fecha = fecha;
    this._estado = EstadoCita.AGENDADA;
    this.agregarEvento(new CitaAgendada(this._identificador.id));
  }

  public aceptar() {
    this._estado = EstadoCita.ACEPTADA;
    this.agregarEvento(new CitaAceptada(this._identificador.id));
  }

  public cancelar() {
    this._estado = EstadoCita.CANCELADA;
    this.agregarEvento(new CitaCancelada(this._identificador.id));
  }

  public rechazar() {
    this._estado = EstadoCita.RECHAZADA;
    this.agregarEvento(new CitaRechazada(this._identificador.id));
  }

  public iniciar() {
    this.agregarEvento(new CitaIniciada(this._identificador.id));
  }

  public finalizar() {
    this._estado = EstadoCita.FINALIZADA;
    this.agregarEvento(new CitaFinalizada(this._identificador.id));
  }

  protected validate(fecha: Fecha) {
    if (fecha.fecha < new Date(Date.now())) {
      throw new ArgumentInvalidException(
        'fecha agendada no puede ser menor a fecha actual',
      );
    }
  }
}
