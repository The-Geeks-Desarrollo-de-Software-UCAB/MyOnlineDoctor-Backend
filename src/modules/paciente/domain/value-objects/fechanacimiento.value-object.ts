import { ArgumentInvalidException } from "src/modules/base/domain/exceptions/argument-invalid.exception";
import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";

export class FechaNacimiento {
    
  constructor(private readonly _fechaNacimiento: Date){ }

  public get fechaNacimiento(): Date {
      return this._fechaNacimiento;
  }

  protected validate(): void{
    if(this._fechaNacimiento == null || this._fechaNacimiento == undefined) {
        throw new ArgumentNotProvidedException("fechaNacimiento no fue provisto")
    }
    if(this._fechaNacimiento > new Date()) {
      throw new ArgumentInvalidException("fechaNacimiento no puede ser mayor a la fecha actual")
    }
  }
}