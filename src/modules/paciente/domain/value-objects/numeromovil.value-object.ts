import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class NumeroMovil {
    
  constructor(private readonly _numeroMovil: string){ }

  public get numeroMovil(): string {
      return this._numeroMovil;
  }

  protected validate(): void{
    if(this._numeroMovil == null || this._numeroMovil == undefined) {
        throw new ArgumentNotProvidedException("numeroMovil no fue provisto")
    }
    if(this._numeroMovil.length > 15) {
        throw new ArgumentOutOfRangeException("numeroMovil esta fuera de rango")
    }
  }
}