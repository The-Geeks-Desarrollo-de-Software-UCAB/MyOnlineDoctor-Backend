import { DomainEvent } from 'src/modules/base/domain/events/domain-event.base';

export class PacienteBloqueadoDomainEvent extends DomainEvent {
    private constructor(private readonly idAgg: string, private readonly _razon: string, private readonly _estadosuscripcion: string) {
        super(idAgg);
        this._razon = _razon;
        this._estadosuscripcion = _estadosuscripcion;
    }
}