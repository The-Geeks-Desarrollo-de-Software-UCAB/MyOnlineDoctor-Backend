import { ArgumentInvalidException } from "src/modules/base/domain/exceptions/argument-invalid.exception";
import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";

export class Duracion {
    //tal vez es mejor hacer un enumerado
    constructor(private readonly _duracion: number){
        this.validate(_duracion);
        this._duracion = _duracion        
     }

    public get duracion(): number {
        return this._duracion;
    }

    protected validate(duracion: number): void{
        if(duracion == null || duracion == undefined) {
            throw new ArgumentNotProvidedException("duracion no fue provisto");
        }
        if(!Number.isInteger(duracion)) {
            throw new ArgumentInvalidException("duracion debe ser entero");
        }
    }
}