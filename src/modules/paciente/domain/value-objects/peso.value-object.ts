import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Peso {
    
  constructor(private readonly _peso: number){ 
    this.validate(_peso);
    this._peso = _peso;
  }

  public get peso(): number {
      return this._peso;
  }

  protected validate(peso: number): void{
    if(peso == null || peso == undefined) {
        throw new ArgumentNotProvidedException("peso no fue provisto");
    }
    if(peso > 1000) {
        throw new ArgumentOutOfRangeException("peso esta fuera de rango");
    }
  }
}