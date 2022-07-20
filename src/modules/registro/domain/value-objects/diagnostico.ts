export class Diagnostico {
    constructor(
        private readonly diagnostico: string
    ) { }

    getPlan = (): string => this.diagnostico;
}