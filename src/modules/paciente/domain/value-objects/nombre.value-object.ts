import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Nombre {
    
  constructor(private readonly _primerNombre: string, private readonly _segundoNombre: string){ }

  public get primerNombre(): string {
      return this._primerNombre;
  }

  public get segundoNombre(): string {
    return this._segundoNombre;
  }

  protected validate(): void{
    if(this._primerNombre == null || this._primerNombre == undefined) {
        throw new ArgumentNotProvidedException("primerNombre no fue provisto")
    }
    if(this._segundoNombre == null || this._segundoNombre == undefined) {
        throw new ArgumentNotProvidedException("segundoNombre no fue provisto")
    }
    if(this._primerNombre.length > 30) {
        throw new ArgumentOutOfRangeException("primerNombre esta fuera de rango")
    }
    if(this._segundoNombre.length > 30) {
        throw new ArgumentOutOfRangeException("segundoNombre esta fuera de rango")
    }
  }

}