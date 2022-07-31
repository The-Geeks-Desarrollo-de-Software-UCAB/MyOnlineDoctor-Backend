import { ArgumentNotProvidedException } from 'src/modules/base/domain/exceptions/argument-not-provided.exception';
import { ArgumentOutOfRangeException } from 'src/modules/base/domain/exceptions/argument-out-of-range.exception';

export class Altura {
  constructor(private readonly _altura: number) {}

  public get altura(): number {
    return this._altura;
  }

  protected validate(altura: number): void {
    if (altura == null || altura == undefined) {
      throw new ArgumentNotProvidedException('altura no fue provisto');
    }
    if (altura > 2.5) {
      throw new ArgumentOutOfRangeException('altura esta fuera de rango');
    }
  }
}
