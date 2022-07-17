import { DomainEvent } from 'src/modules/base/domain/events/domain-event.base';

export class SuscripcionPagadaDomainEvent extends DomainEvent {
    private constructor(private readonly idAgg: string, private readonly _estadosuscripcion: string) {
        super(idAgg);
        this._estadosuscripcion = _estadosuscripcion;
    }
}