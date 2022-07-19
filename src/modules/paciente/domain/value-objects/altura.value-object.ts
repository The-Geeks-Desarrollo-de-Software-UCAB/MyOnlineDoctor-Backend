import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Altura {
    
  constructor(private readonly _altura: string){ }

  public get altura(): string {
      return this._altura;
  }

  protected validate(altura: string): void{
    if(altura == null || altura == undefined) {
        throw new ArgumentNotProvidedException("altura no fue provisto");
    }
    if(altura.length > 4) {
        throw new ArgumentOutOfRangeException("altura esta fuera de rango");
    }
  }
}