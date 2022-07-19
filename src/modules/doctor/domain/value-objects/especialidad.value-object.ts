import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Especialidad {
    constructor(private readonly _especialidad: string) {
        this.validate(_especialidad);
        this._especialidad = _especialidad;
    }

    get especialidad(): string {
        return this._especialidad;
    }

    equals(otro: Especialidad) {
        return this._especialidad == otro.especialidad;
    }

    protected validate(especialidad: string): void{
        if(especialidad == null || especialidad == undefined) {
            throw new ArgumentNotProvidedException("especialidad no fue provisto");
        }
        if(especialidad.length > 30) {
            throw new ArgumentOutOfRangeException("especialidad esta fuera de rango");
        }
    }
}