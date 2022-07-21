import { AggregateRoot } from 'src/modules/base/domain/entities/aggregate-root.base';
import { Apellido } from '../value-objects/apellido.value-object';
import { Especialidad } from '../value-objects/especialidad.value-object';
import { IdDoctor } from '../value-objects/idDoctor.value-object';
import { Localizacion } from '../value-objects/localizacion.value-object';
import { Nombre } from '../value-objects/nombre.value-object';
import { PromedioCalificacion } from '../value-objects/promedio-calificacion.value-object';

export class DoctorEntity extends AggregateRoot {
  constructor(
    private _id: IdDoctor,
    private _nombre: Nombre,
    private _apellido: Apellido,
    private _especialidad: Especialidad[],
    private _promedioCalificacion: PromedioCalificacion,
    private _localizacion: Localizacion,
  ) {
    super();
    this._id = _id;
    this._nombre = _nombre;
    this._apellido = _apellido;
    this._especialidad = _especialidad;
    this._promedioCalificacion = _promedioCalificacion;
    this._localizacion = _localizacion;
  }

  get id() {
    return this._id;
  }

  get nombre() {
    return this._nombre;
  }

  get apellido() {
    return this._apellido;
  }

  get especialidad() {
    return this._especialidad;
  }

  get promedioCalificacion() {
    return this._promedioCalificacion;
  }

  get localizacion() {
    return this._localizacion;
  }
}
