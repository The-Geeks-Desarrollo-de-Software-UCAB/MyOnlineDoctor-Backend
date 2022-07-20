import { DomainEvent } from 'src/modules/base/domain/events/domain-event.base';

export class SuscripcionModificadaDomainEvent extends DomainEvent {
    constructor(private readonly idAgg: string) {
        super(idAgg);
        
    }
}