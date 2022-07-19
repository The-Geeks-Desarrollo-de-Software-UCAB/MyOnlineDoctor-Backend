import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Operacion {
    
  constructor(private readonly _operacion: string){ }

  public get operacion(): string {
      return this._operacion;
  }

  protected validate(): void{
    if(this._operacion == null || this._operacion == undefined) {
        throw new ArgumentNotProvidedException("operacion no fue provisto")
    }
    if(this._operacion.length > 30) {
        throw new ArgumentOutOfRangeException("operacion esta fuera de rango")
    }
  }
}