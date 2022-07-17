
export abstract class DomainEvent {
    private readonly _fechaOcurrencia: Date;
    private idAggregado: string;
    
    constructor(){
        this._fechaOcurrencia = new Date();
    }

    public get fechaOcurrencia(): Date {
        return this._fechaOcurrencia;
    }

    public static nombreEvento(): string {
        return this.prototype.constructor.name;
    }
}