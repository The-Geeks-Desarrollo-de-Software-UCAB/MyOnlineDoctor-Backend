export class examen {
    constructor(
        private readonly examen: string,
        private readonly fecha: Date
    ) { }

    getpreescripcion = (): string => this.examen;
    getfecha = (): Date => this.fecha;
}