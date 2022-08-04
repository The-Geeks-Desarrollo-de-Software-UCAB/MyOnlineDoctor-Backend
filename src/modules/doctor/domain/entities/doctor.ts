import { AggregateRoot } from 'src/modules/base/domain/entities/aggregate-root.base';
import { Apellido } from '../value-objects/apellido.value-object';
import { EspecialidadDomain } from '../value-objects/especialidad.value-object';
import { IdDoctor } from '../value-objects/idDoctor.value-object';
import { Localizacion } from '../value-objects/localizacion.value-object';
import { Nombre } from '../value-objects/nombre.value-object';
import { PromedioCalificacion } from '../value-objects/promedio-calificacion.value-object';
import { Estado } from '../value-objects/estado.value-object';

export class DoctorEntity extends AggregateRoot {
  constructor(
    private _id: IdDoctor,
    private _nombre: Nombre,
    private _apellido: Apellido,
    private _especialidad: EspecialidadDomain[],
    private _promedioCalificacion: PromedioCalificacion,
    private _localizacion: Localizacion,
    private _estado: Estado = Estado.ACTIVO,
  ) {
    super();
    this._id = _id;
    this._nombre = _nombre;
    this._apellido = _apellido;
    this._especialidad = _especialidad;
    this._promedioCalificacion = _promedioCalificacion;
    this._localizacion = _localizacion;
    this._estado = _estado;
  }

  get id() {
    return this._id;
  }

  get nombre() {
    return this._nombre.primerNombre;
  }

  get segnombre() {
    return this._nombre.segundoNombre;
  }

  get apellido() {
    return this._apellido.primerApellido;
  }

  get segapellido() {
    return this._apellido.segundoApellido;
  }

  get especialidad() {
    return this._especialidad;
  }

  get promedioCalificacion() {
    return this._promedioCalificacion;
  }

  get latlocalizacion() {
    return this._localizacion.latitud;
  }

  get lonlocalizacion() {
    return this._localizacion.longitud;
  }

  get estado() {
    return this._estado;
  }

  actualizarCalificacion(calificacion: number) {
    this._promedioCalificacion = new PromedioCalificacion(calificacion);
  }

  bloquear(razon: string): void {
    this._estado = Estado.BLOQUEADO;
  }
}
