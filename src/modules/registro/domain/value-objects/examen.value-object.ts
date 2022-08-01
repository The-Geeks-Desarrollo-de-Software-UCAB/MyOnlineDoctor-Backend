import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Examen {
    
    constructor(private readonly _examen: string){ 
        this.validate(_examen);
        this._examen = _examen;
    }

    public get examen(): string {
        return this._examen;
    }

    protected validate(examen: string): void{
        if(examen == null || examen == undefined) {
            throw new ArgumentNotProvidedException("examen no fue provisto");
        }
        if(examen.length > 30) {
            throw new ArgumentOutOfRangeException("examen esta fuera de rango");
        }
    }
}