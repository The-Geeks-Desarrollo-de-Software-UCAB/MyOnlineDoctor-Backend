import { ArgumentNotProvidedException } from 'src/modules/base/domain/exceptions/argument-not-provided.exception';
import { ArgumentOutOfRangeException } from 'src/modules/base/domain/exceptions/argument-out-of-range.exception';

export class Localizacion {
  constructor(
    private readonly _latitud: number,
    private readonly _longitud: number,
  ) {
    this._latitud = _latitud;
    this._longitud = _longitud;
  }

  get latitud(): number {
    return this._latitud;
  }

  get longitud(): number {
    return this._longitud;
  }

  equals(otro: Localizacion) {
    return this._latitud == otro.latitud && this._longitud == otro.longitud;
  }

  protected validate(latitud: number, longitud: number): void {
    if (latitud == null || latitud == undefined) {
      throw new ArgumentNotProvidedException('latitud no fue provisto');
    }
    if (longitud == null || longitud == undefined) {
      throw new ArgumentNotProvidedException('longitud no fue provisto');
    }
  }
}
