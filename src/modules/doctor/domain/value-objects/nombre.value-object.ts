import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Nombre {
    constructor(private readonly _primerNombre: string, private readonly _segundoNombre: string) {
        this.validate(_primerNombre, _segundoNombre);
        this._primerNombre = _primerNombre;
        this._segundoNombre = _segundoNombre;
    }

    get primerNombre(): string {
        return this._primerNombre;
    }

    get segundoNombre(): string {
        return this._segundoNombre;
    }

    equals(otro: Nombre) {
        return this._primerNombre == otro.primerNombre && this._segundoNombre == otro.segundoNombre;
    }

    protected validate(primerNombre: string, segundoNombre: string): void{
        if(primerNombre == null || primerNombre == undefined) {
            throw new ArgumentNotProvidedException("primerNombre no fue provisto");
        }
        if(segundoNombre == null || segundoNombre == undefined) {
            throw new ArgumentNotProvidedException("segundoNombre no fue provisto");
        }
        if(primerNombre.length > 30) {
            throw new ArgumentOutOfRangeException("primerNombre esta fuera de rango");
        }
        if(segundoNombre.length > 30) {
            throw new ArgumentOutOfRangeException("segundoNombre esta fuera de rango");
        }
    }
}