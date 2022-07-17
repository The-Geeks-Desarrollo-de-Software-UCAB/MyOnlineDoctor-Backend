export class PromedioCalificacion {
    private constructor(private readonly promedioCalificacion: string) {
        this.promedioCalificacion = promedioCalificacion;
    }

    get PromedioCalificacion(): string {
        return this.promedioCalificacion;
    }

    equals(otro: PromedioCalificacion) {
        return this.promedioCalificacion == otro.promedioCalificacion;
    }
}