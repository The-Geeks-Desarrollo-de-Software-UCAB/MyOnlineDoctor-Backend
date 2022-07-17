export class Nombre {
    private constructor(private readonly primerNombre: string, private readonly segundoNombre: string) {
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
    }

    get PrimerNombre(): string {
        return this.primerNombre;
    }

    get SegundoNombre(): string {
        return this.segundoNombre;
    }

    equals(otro: Nombre) {
        return this.primerNombre == otro.primerNombre && this.segundoNombre == otro.segundoNombre;
    }
}