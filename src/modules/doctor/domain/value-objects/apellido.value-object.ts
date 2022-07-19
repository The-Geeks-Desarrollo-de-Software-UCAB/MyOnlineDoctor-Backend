import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Apellido {
    constructor(private readonly _primerApellido: string, private readonly _segundoApellido: string) {
        this.validate(_primerApellido, _segundoApellido);
        this._primerApellido = _primerApellido;
        this._segundoApellido = _segundoApellido;
    }

    get primerApellido(): string {
        return this.primerApellido;
    }

    get segundoApellido(): string {
        return this.segundoApellido;
    }

    equals(otro: Apellido) {
        return this._primerApellido == otro.primerApellido && this._segundoApellido == otro.segundoApellido
    }

    protected validate(primerApellido: string, segundoApellido: string): void{
        if(primerApellido == null || primerApellido == undefined) {
            throw new ArgumentNotProvidedException("primerApellido no fue provisto");
        }
        if(segundoApellido == null || segundoApellido == undefined) {
            throw new ArgumentNotProvidedException("segundoApellido no fue provisto");
        }
        if(primerApellido.length > 30) {
            throw new ArgumentOutOfRangeException("primerApellido esta fuera de rango");
        }
        if(segundoApellido.length > 30) {
            throw new ArgumentOutOfRangeException("segundoApellido esta fuera de rango");
        }
    }
}