export class Apellido {
    private constructor(private readonly primerApellido: string, private readonly segundoApellido: string) {
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
    }

    get PrimerApellido(): string {
        return this.primerApellido;
    }

    get SegundoApellido(): string {
        return this.segundoApellido;
    }

    equals(otro: Apellido) {
        return this.primerApellido == otro.primerApellido && this.segundoApellido == otro.segundoApellido
    }
}