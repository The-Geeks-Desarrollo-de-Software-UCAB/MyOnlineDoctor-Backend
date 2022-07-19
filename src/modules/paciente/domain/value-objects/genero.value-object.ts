import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Genero {
    
  constructor(private readonly _genero: string){ }

  public get genero(): string {
      return this._genero;
  }

  protected validate(): void{
    if(this._genero == null || this._genero == undefined) {
        throw new ArgumentNotProvidedException("genero no fue provisto")
    }
    if(this._genero.length > 1) {
        throw new ArgumentOutOfRangeException("genero esta fuera de rango")
    }
  }
}