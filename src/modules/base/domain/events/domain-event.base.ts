import { decoLog } from 'src/modules/decorators/logging-decorator';

export abstract class DomainEvent {
    private readonly _fechaOcurrencia: Date;
    private readonly _idAggregado: string;
    
    constructor(idAgg: string){
        this._fechaOcurrencia = new Date();
        this._idAggregado = idAgg;
    }

    
    @decoLog()
    public get fechaOcurrencia(): Date {
        return this._fechaOcurrencia;
    }

    @decoLog()
    public get idAggregado(): string {
        return this._idAggregado;
    }

    @decoLog()
    public static nombreEvento(): string {
        return this.prototype.constructor.name;
    }
}