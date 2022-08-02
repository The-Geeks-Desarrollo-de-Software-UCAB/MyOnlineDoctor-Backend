import { ArgumentInvalidException } from 'src/modules/base/domain/exceptions/argument-invalid.exception';

export class Fecha {
  constructor(private readonly _fecha: Date) {
    this.validate(_fecha);
    this._fecha = _fecha;
  }

  protected validate(fecha: Date) {
    if (fecha != null) {
      if (fecha < new Date(Date.now())) {
        throw new ArgumentInvalidException(
          'fecha agendada no puede ser menor a fecha actual',
        );
      }
    }
  }

  public get fecha(): Date {
    return this._fecha;
  }
}
