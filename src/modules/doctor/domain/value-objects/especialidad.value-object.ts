export class Especialidad {
    private constructor(private readonly _especialidad: string) {
        this._especialidad = _especialidad;
    }

    get especialidad(): string {
        return this._especialidad;
    }

    equals(otro: Especialidad) {
        return this._especialidad == otro.especialidad;
    }
}