export class Historia {
    constructor(
        private readonly id: string
    ) { }

    static fromString = (id: string): Historia => new Historia(id);

    toString = (): string => this.id;
}