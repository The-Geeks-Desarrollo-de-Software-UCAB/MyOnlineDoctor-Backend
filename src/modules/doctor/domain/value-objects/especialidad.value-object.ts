export class Especialidad {
    private constructor(private readonly especialidad: string) {
        this.especialidad = especialidad;
    }

    get Especialidad(): string {
        return this.especialidad;
    }

    equals(otro: Especialidad) {
        return this.especialidad == otro.especialidad;
    }
}