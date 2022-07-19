import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Antecedente {
    
  constructor(private readonly _antecedente: string){ }

  public get antecedente(): string {
      return this._antecedente;
  }

  protected validate(): void{
    if(this._antecedente == null || this._antecedente == undefined) {
        throw new ArgumentNotProvidedException("antecedente no fue provisto")
    }
    if(this._antecedente.length > 30) {
        throw new ArgumentOutOfRangeException("antecedente esta fuera de rango")
    }
  }
}