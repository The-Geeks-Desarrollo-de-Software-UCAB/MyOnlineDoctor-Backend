import { DomainEvent } from 'src/modules/base/domain/events/domain-event.base';

export class SuscripcionCanceladaDomainEvent extends DomainEvent {
    private constructor(private readonly idAgg: string) {
        super(idAgg);
        
    }
}