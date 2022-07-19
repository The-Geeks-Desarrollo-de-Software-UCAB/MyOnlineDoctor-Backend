import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Altura {
    
  constructor(private readonly _altura: string){ }

  public get altura(): string {
      return this._altura;
  }

  protected validate(): void{
    if(this._altura == null || this._altura == undefined) {
        throw new ArgumentNotProvidedException("altura no fue provisto")
    }
    if(this._altura.length > 4) {
        throw new ArgumentOutOfRangeException("altura esta fuera de rango")
    }
  }
}