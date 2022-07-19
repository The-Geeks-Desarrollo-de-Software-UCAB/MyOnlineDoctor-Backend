import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Operacion {
    
  constructor(private readonly _operacion: string){ 
    this.validate(_operacion);
    this._operacion = _operacion;
  }

  public get operacion(): string {
      return this._operacion;
  }

  protected validate(operacion: string): void{
    if(operacion == null || operacion == undefined) {
        throw new ArgumentNotProvidedException("operacion no fue provisto");
    }
    if(operacion.length > 30) {
        throw new ArgumentOutOfRangeException("operacion esta fuera de rango");
    }
  }
}