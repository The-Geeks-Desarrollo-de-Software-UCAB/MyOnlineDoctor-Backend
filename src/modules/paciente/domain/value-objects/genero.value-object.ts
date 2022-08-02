import { ArgumentNotProvidedException } from 'src/modules/base/domain/exceptions/argument-not-provided.exception';
import { ArgumentOutOfRangeException } from 'src/modules/base/domain/exceptions/argument-out-of-range.exception';

export class Genero {
  constructor(private readonly _genero: string) {
    this.validate(_genero);
    this._genero = _genero;
  }

  public get genero(): string {
    return this._genero;
  }

  protected validate(genero: string): void {
    if (genero == null || genero == undefined) {
      throw new ArgumentNotProvidedException('genero no fue provisto');
    }
    if (
      !(genero.toUpperCase() == 'M' || genero.toUpperCase() == 'F') ||
      genero.length > 1
    ) {
      throw new ArgumentOutOfRangeException('genero esta fuera de rango');
    }
  }
}
