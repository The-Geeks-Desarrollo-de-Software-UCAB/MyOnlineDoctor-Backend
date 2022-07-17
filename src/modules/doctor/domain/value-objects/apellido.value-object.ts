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
}