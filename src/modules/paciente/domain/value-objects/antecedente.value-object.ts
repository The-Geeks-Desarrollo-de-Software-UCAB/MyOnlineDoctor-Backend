import { ArgumentNotProvidedException } from 'src/modules/base/domain/exceptions/argument-not-provided.exception';
import { ArgumentOutOfRangeException } from 'src/modules/base/domain/exceptions/argument-out-of-range.exception';

export class Antecedente {
  constructor(private readonly _antecedente: string) {
    this.validate(_antecedente);
    this._antecedente = _antecedente;
  }

  public get antecedente(): string {
    return this._antecedente;
  }

  protected validate(antecedente: string): void {
    if (antecedente == null || antecedente == undefined) {
      throw new ArgumentNotProvidedException('antecedente no fue provisto');
    }
    if (antecedente.length > 500) {
      throw new ArgumentOutOfRangeException('antecedente esta fuera de rango');
    }
  }
}
