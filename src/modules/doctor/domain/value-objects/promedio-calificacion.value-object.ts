import { ArgumentInvalidException } from 'src/modules/base/domain/exceptions/argument-invalid.exception';
import { ArgumentOutOfRangeException } from 'src/modules/base/domain/exceptions/argument-out-of-range.exception';
export class PromedioCalificacion {
  constructor(private readonly _promedioCalificacion: number) {
    this.validate(_promedioCalificacion);
    this._promedioCalificacion = _promedioCalificacion;
  }

  get promedioCalificacion(): number {
    return this._promedioCalificacion;
  }

  equals(otro: PromedioCalificacion) {
    return this._promedioCalificacion == otro.promedioCalificacion;
  }

  protected validate(promedioCalificacion: number): void {
    if (!(promedioCalificacion == null)) {
      if (promedioCalificacion > 10 || promedioCalificacion < 0) {
        throw new ArgumentOutOfRangeException('puntuacion esta fuera de rango');
      }
      if (!Number.isInteger(+promedioCalificacion)) {
        throw new ArgumentInvalidException('puntuacion debe ser entero');
      }
    }
  }
}
