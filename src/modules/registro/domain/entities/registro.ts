import { IdRegistro } from '../value-objects/idRegistro.value-object';
import { Prescripcion } from '../value-objects/prescripcion.value-object';
import { Historia } from '../value-objects/historia.value-object';
import { Diagnostico } from '../value-objects/diagnostico.value-object';
import { Plan } from '../value-objects/plan.value-object';
import { Examen } from '../value-objects/examen.value-object';
import { Fecha } from '../value-objects/fecha.value-object';
import { AggregateRoot } from 'src/modules/base/domain/entities/aggregate-root.base';
import { RegistroCreado } from '../events/registro-creado.domain-event';
import { RegistroModificado } from '../events/registro-modificado.domain-event';

export class RegistroEntity extends AggregateRoot {
  private _identificador: IdRegistro;
  private _prescripcion: Prescripcion;
  private _historia: Historia;
  private _diagnostico: Diagnostico;
  private _plan: Plan;
  private _examen: Examen;
  private _fecha: Fecha;

  constructor(
    identificador: IdRegistro,
    prescripcion: Prescripcion,
    historia: Historia,
    diagnostico: Diagnostico,
    plan: Plan,
    examen: Examen,
    fecha: Fecha
  ) {
    super();
    this._identificador = identificador;
    this._prescripcion = prescripcion;
    this._historia = historia;
    this._diagnostico = diagnostico;
    this._plan = plan;
    this._examen = examen;
    this._fecha = fecha;
    this.agregarEvento(new RegistroCreado(this._identificador.id));
  }

  static create(
    identificador: string,
    prescripcion: string,
    historia: string,
    diagnostico: string,
    plan: string,
    examen: string,
    fecha: Date
  ): RegistroEntity {
    const idRegistro = new IdRegistro(identificador);
    const prescripcionValueObject = new Prescripcion(prescripcion);
    const historiaValueObject = new Historia(historia);
    const diagnosticoValueObject = new Diagnostico(diagnostico);
    const planValueObject = new Plan(plan);
    const examenValueObject = new Examen(examen);
    const fechaValueObject = new Fecha(fecha);
    return new RegistroEntity(
      idRegistro,
      prescripcionValueObject,
      historiaValueObject,
      diagnosticoValueObject,
      planValueObject,
      examenValueObject,
      fechaValueObject
    );
  }

  public get id(): string {
    return this._identificador.id;
  }

  public get prescripcion(): string {
    return this._prescripcion.prescripcion;
  }

  public get historia(): string {
    return this._historia.historia;
  }

  public get diagnostico(): string {
    return this._diagnostico.diagnostico;
  }

  public get plan(): string {
    return this._plan.plan;
  }

  public get examen(): string {
    return this._examen.examen;
  }

  public get fecha(): Date {
    return this._fecha.fecha;
  }

  public set plan(plan: string) {
    this._plan = new Plan(plan);
    this.agregarEvento(new RegistroModificado(this._identificador.id));
  }

  public set examen(examen: string) {
    this._examen = new Examen(examen);
    this.agregarEvento(new RegistroModificado(this._identificador.id));
  }

  public set prescripcion(prescripcion: string) {
    this._prescripcion = new Prescripcion(prescripcion);
    this.agregarEvento(new RegistroModificado(this._identificador.id));
  }
}
