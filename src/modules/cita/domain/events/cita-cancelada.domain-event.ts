import { DomainEvent } from "src/modules/base/domain/events/domain-event.base";
import { decoLog } from "src/modules/decorators/logging-decorator";

export class CitaCancelada extends DomainEvent {


    @decoLog()
    public darIdCita(): string{
        return this.idAggregado;
    }
}