import { ArgumentInvalidException } from 'src/modules/base/domain/exceptions/argument-invalid.exception';
import { ArgumentNotProvidedException } from 'src/modules/base/domain/exceptions/argument-not-provided.exception';

export class FechaNacimiento {
  constructor(private readonly _fechaNacimiento: Date) {
    this.validate(_fechaNacimiento);
    this._fechaNacimiento = _fechaNacimiento;
  }

  public get fechaNacimiento(): Date {
    return this._fechaNacimiento;
  }

  protected validate(fechaNacimiento: Date): void {
    if (fechaNacimiento == null || fechaNacimiento == undefined) {
      throw new ArgumentNotProvidedException('fechaNacimiento no fue provisto');
    }
    if (fechaNacimiento > new Date(Date.now())) {
      throw new ArgumentInvalidException(
        'la fecha de nacimiento no puede ser mayor a la fecha actual',
      );
    }
  }
}
