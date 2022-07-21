export class preescripcion {
    constructor(
        private readonly preescripcion: string,
        private readonly fecha: Date
    ) { }

    getpreescripcion = (): string => this.preescripcion;
    getfecha = (): Date => this.fecha;
}