import { ArgumentInvalidException } from "src/modules/base/domain/exceptions/argument-invalid.exception";
import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Calificacion {
    constructor(private readonly _puntuacion: number){ 
        this._puntuacion = _puntuacion
    }

    public get puntuacion(): number {
        return this._puntuacion
    }

    protected validate(): void{
        if(this._puntuacion == null || this._puntuacion == undefined) {
            throw new ArgumentNotProvidedException("puntuacion no fue provisto")
        }
        if(this._puntuacion > 10) {
            throw new ArgumentOutOfRangeException("puntuacion esta fuera de rango")
        }
        if(!Number.isInteger(this._puntuacion)) {
            throw new ArgumentInvalidException("puntuacion debe ser entero")
        }
    }
}