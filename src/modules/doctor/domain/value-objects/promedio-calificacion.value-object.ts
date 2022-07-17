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
}