import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Peso {
    
  constructor(private readonly _peso: number){ }

  public get peso(): number {
      return this._peso;
  }

  protected validate(): void{
    if(this._peso == null || this._peso == undefined) {
        throw new ArgumentNotProvidedException("peso no fue provisto")
    }
    if(this._peso > 1000) {
        throw new ArgumentOutOfRangeException("peso esta fuera de rango")
    }
  }
}