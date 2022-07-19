import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Apellido {
    private constructor(private readonly _primerApellido: string, private readonly _segundoApellido: string) {
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

    protected validate(): void{
        if(this._primerApellido == null || this._primerApellido == undefined) {
            throw new ArgumentNotProvidedException("primerApellido no fue provisto")
        }
        if(this._segundoApellido == null || this._segundoApellido == undefined) {
            throw new ArgumentNotProvidedException("segundoApellido no fue provisto")
        }
        if(this._primerApellido.length > 30) {
            throw new ArgumentOutOfRangeException("primerApellido esta fuera de rango")
        }
        if(this._segundoApellido.length > 30) {
            throw new ArgumentOutOfRangeException("segundoApellido esta fuera de rango")
        }
    }
}