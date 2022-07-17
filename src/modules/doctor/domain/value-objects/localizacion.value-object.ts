export class Localizacion {
    private constructor(private readonly latitud: string, private readonly longitud: string) { 
        this.latitud = latitud;
        this.longitud = longitud;
    }

    get Latitud(): string {
        return this.latitud;
    }

    get Longitud(): string {
        return this.longitud;
    }

    equals(otro: Localizacion) {
        return this.latitud == otro.latitud && this.longitud == otro.longitud;
    }
}