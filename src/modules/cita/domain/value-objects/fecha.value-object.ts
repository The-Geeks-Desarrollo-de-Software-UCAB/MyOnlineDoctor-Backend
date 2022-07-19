import { ArgumentInvalidException } from "src/modules/base/domain/exceptions/argument-invalid.exception";
import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";

export class Fecha {
    
    constructor(private readonly _fecha: Date){ }

    public get fecha(): Date {
        return this._fecha;
    }

    protected validate(): void{
        if(this._fecha == null || this._fecha == undefined) {
            throw new ArgumentNotProvidedException("fecha no fue provisto")
        }
        if(this._fecha > new Date()) {
          throw new ArgumentInvalidException("fecha no puede ser mayor a la fecha actual")
        }
      }
}