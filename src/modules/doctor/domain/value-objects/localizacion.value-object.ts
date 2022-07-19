import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Localizacion {
    constructor(private readonly _latitud: string, private readonly _longitud: string) { 
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

    protected validate(latitud: string, longitud: string): void{
        if(latitud == null || latitud == undefined) {
            throw new ArgumentNotProvidedException("latitud no fue provisto");
        }
        if(longitud == null || longitud == undefined) {
            throw new ArgumentNotProvidedException("longitud no fue provisto");
        }
    }
}