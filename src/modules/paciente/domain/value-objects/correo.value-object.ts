import { ArgumentInvalidException } from "src/modules/base/domain/exceptions/argument-invalid.exception";
import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Correo {
    
  constructor(private readonly _correo: string){ 
    this.validate(_correo);
    this._correo = _correo;
  }

  public get correo(): string {
      return this._correo;
  }

  protected validate(correo: string): void{
    if(correo == null || correo == undefined) {
        throw new ArgumentNotProvidedException("correo no fue provisto");
    }
    if(correo.length > 320 || correo.length < 3) {
        throw new ArgumentOutOfRangeException("correo esta fuera de rango");
    }
    if(!correo.includes("@")){
        throw new ArgumentInvalidException("correo tiene formato incorrecto");
    }
  }
}