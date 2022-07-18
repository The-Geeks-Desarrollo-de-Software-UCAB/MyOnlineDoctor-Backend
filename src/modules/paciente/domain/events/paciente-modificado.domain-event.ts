import { DomainEvent } from 'src/modules/base/domain/events/domain-event.base';

export class PacienteModificadoDomainEvent extends DomainEvent {

  public constructor(public readonly idAgg: string) {
    super(idAgg);
    
}

}
