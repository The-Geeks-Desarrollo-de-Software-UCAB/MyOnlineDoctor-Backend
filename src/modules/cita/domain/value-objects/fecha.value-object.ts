import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";

export class Fecha {
    
    constructor(private readonly _fecha: Date){ 
        this.validate(_fecha);
        this._fecha = _fecha;
    }

    public get fecha(): Date {
        return this.fecha;
    }

    protected validate(fecha: Date): void{
        if(fecha == null || fecha == undefined) {
            throw new ArgumentNotProvidedException("fecha no fue provisto");
        }
      }
}