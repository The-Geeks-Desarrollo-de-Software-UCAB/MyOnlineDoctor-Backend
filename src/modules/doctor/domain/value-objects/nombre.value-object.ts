export class Nombre {
    private constructor(private readonly _primerNombre: string, private readonly _segundoNombre: string) {
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
}