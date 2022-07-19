import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Especialidad {
    private constructor(private readonly _especialidad: string) {
        this._especialidad = _especialidad;
    }

    get especialidad(): string {
        return this._especialidad;
    }

    equals(otro: Especialidad) {
        return this._especialidad == otro.especialidad;
    }

    protected validate(): void{
        if(this._especialidad == null || this._especialidad == undefined) {
            throw new ArgumentNotProvidedException("especialidad no fue provisto")
        }
        if(this._especialidad.length > 30) {
            throw new ArgumentOutOfRangeException("especialidad esta fuera de rango")
        }
    }
}