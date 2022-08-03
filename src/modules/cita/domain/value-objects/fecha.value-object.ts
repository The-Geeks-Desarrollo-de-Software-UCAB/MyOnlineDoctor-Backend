import { ArgumentInvalidException } from 'src/modules/base/domain/exceptions/argument-invalid.exception';

export class Fecha {
  constructor(private readonly _fecha: Date) {
    this._fecha = _fecha;
  }

  public get fecha(): Date {
    return this._fecha;
  }
}
