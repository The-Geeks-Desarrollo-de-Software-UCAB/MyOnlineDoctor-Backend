import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
export class PromedioCalificacion {
    constructor(private readonly _promedioCalificacion: string) {
        this.validate(_promedioCalificacion);
        this._promedioCalificacion = _promedioCalificacion;
    }

    get promedioCalificacion(): string {
        return this._promedioCalificacion;
    }

    equals(otro: PromedioCalificacion) {
        return this._promedioCalificacion == otro.promedioCalificacion;
    }

    protected validate(promedioCalificacion: string): void{
        if(promedioCalificacion == null || promedioCalificacion == undefined) {
            throw new ArgumentNotProvidedException("promedioCalificacion no fue provisto");
        }
    }
}