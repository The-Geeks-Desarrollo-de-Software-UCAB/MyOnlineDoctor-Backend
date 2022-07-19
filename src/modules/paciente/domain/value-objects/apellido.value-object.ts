import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Apellido {
    
  constructor(private readonly _primerApellido: string, private readonly _segundoApellido: string){ }

  public get primerApellido(): string {
      return this._primerApellido;
  }

  public get segundoApellido(): string {
    return this._segundoApellido;
  }

  protected validate(): void{
    if(this._primerApellido == null || this._primerApellido == undefined) {
        throw new ArgumentNotProvidedException("primerApellido no fue provisto")
    }
    if(this._segundoApellido == null || this._segundoApellido == undefined) {
        throw new ArgumentNotProvidedException("segundoApellido no fue provisto")
    }
    if(this._primerApellido.length > 30) {
        throw new ArgumentOutOfRangeException("primerApellido esta fuera de rango")
    }
    if(this._segundoApellido.length > 30) {
        throw new ArgumentOutOfRangeException("segundoApellido esta fuera de rango")
    }
  }

}