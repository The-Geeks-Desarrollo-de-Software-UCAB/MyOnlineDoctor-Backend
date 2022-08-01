import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Prescripcion {
    
    constructor(private readonly _prescripcion: string){ 
        this.validate(_prescripcion);
        this._prescripcion = _prescripcion;
    }

    public get prescripcion(): string {
        return this._prescripcion;
    }

    protected validate(prescripcion: string): void{
        if(prescripcion == null || prescripcion == undefined) {
            throw new ArgumentNotProvidedException("prescripcion no fue provisto");
        }
        if(prescripcion.length > 30) {
            throw new ArgumentOutOfRangeException("prescripcion esta fuera de rango");
        }
    }
}