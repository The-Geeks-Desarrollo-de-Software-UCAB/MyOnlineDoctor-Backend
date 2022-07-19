import { ArgumentInvalidException } from "src/modules/base/domain/exceptions/argument-invalid.exception";
import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Correo {
    
  constructor(private readonly _correo: string){ }

  public get correo(): string {
      return this._correo;
  }

  protected validate(): void{
    if(this._correo == null || this._correo == undefined) {
        throw new ArgumentNotProvidedException("correo no fue provisto")
    }
    if(this._correo.length > 320 || this._correo.length < 3) {
        throw new ArgumentOutOfRangeException("correo esta fuera de rango")
    }
    if(!this._correo.includes("@")){
        throw new ArgumentInvalidException("correo tiene formato incorrecto");
    }
  }
}