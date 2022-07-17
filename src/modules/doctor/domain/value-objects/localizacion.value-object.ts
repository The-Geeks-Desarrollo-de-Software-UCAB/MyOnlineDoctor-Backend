export class Localizacion {
    private constructor(private readonly _latitud: string, private readonly _longitud: string) { 
        this._latitud = _latitud;
        this._longitud = _longitud;
    }

    get latitud(): string {
        return this._latitud;
    }

    get longitud(): string {
        return this._longitud;
    }

    equals(otro: Localizacion) {
        return this._latitud == otro.latitud && this._longitud == otro.longitud;
    }
}