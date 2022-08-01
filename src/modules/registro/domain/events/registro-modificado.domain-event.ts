import { DomainEvent } from "src/modules/base/domain/events/domain-event.base";

export class RegistroModificado extends DomainEvent {
    public darIdRegistro(): string {
        return this.idAggregado;
    }
}