
export abstract class DomainEvent {
    private readonly _fechaOcurrencia: Date;
    private readonly _idAggregado: string;
    
    constructor(idAgg: string){
        this._fechaOcurrencia = new Date();
        this._idAggregado = idAgg;
    }

    public get fechaOcurrencia(): Date {
        return this._fechaOcurrencia;
    }

    public get idAggregado(): string {
        return this._idAggregado;
    }

    public static nombreEvento(): string {
        return this.prototype.constructor.name;
    }
}