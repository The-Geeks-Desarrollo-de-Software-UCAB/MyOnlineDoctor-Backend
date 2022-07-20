import { DomainEvent } from 'src/modules/base/domain/events/domain-event.base';

export class SuscripcionPagadaDomainEvent extends DomainEvent {
    constructor(private readonly idAgg: string) {
        super(idAgg);
       
    }
}