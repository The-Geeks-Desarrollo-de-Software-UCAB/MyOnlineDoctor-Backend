import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class PromedioCalificacion {
    private constructor(private readonly _promedioCalificacion: string) {
        this._promedioCalificacion = _promedioCalificacion;
    }

    get promedioCalificacion(): string {
        return this._promedioCalificacion;
    }

    equals(otro: PromedioCalificacion) {
        return this._promedioCalificacion == otro.promedioCalificacion;
    }

    protected validate(): void{
        if(this._promedioCalificacion == null || this._promedioCalificacion == undefined) {
            throw new ArgumentNotProvidedException("promedioCalificacion no fue provisto")
        }
    }
}