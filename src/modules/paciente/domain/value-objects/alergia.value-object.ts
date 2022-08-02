import { ArgumentNotProvidedException } from 'src/modules/base/domain/exceptions/argument-not-provided.exception';
import { ArgumentOutOfRangeException } from 'src/modules/base/domain/exceptions/argument-out-of-range.exception';

export class Alergia {
  constructor(private readonly _alergia: string) {
    this.validate(this.alergia);
    this._alergia = this.alergia;
  }

  public get alergia(): string {
    return this._alergia;
  }

  protected validate(alergia: string): void {
    if (alergia == null || alergia == undefined) {
      throw new ArgumentNotProvidedException('alergia no fue provisto');
    }
    if (alergia.length > 500) {
      throw new ArgumentOutOfRangeException('alergia esta fuera de rango');
    }
  }
}
