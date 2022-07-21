import { DomainEvent } from "src/modules/base/domain/events/domain-event.base";

export class CitaIniciada extends DomainEvent {

    
    public darIdCita(): string{
        return this.idAggregado;
    }
}