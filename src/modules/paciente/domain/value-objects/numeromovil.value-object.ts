import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class NumeroMovil {
    
  constructor(private readonly _numeroMovil: string){ 
    this.validate(_numeroMovil);
    this._numeroMovil = _numeroMovil;
  }

  public get numeroMovil(): string {
      return this._numeroMovil;
  }

  protected validate(numeroMovil: string): void{
    if(numeroMovil == null || numeroMovil == undefined) {
        throw new ArgumentNotProvidedException("numeroMovil no fue provisto");
    }
    if(numeroMovil.length > 15) {
        throw new ArgumentOutOfRangeException("numeroMovil esta fuera de rango");
    }
  }
}