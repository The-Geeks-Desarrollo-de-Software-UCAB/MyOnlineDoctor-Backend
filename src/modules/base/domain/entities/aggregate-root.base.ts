import { DomainEvent } from '../events/domain-event.base';
import { decoLog } from 'src/modules/decorators/logging-decorator';

export abstract class AggregateRoot {
  private _domainEvents: DomainEvent[] = [];

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected agregarEvento(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
  }

  public limpiarEventos(): void {
    this._domainEvents = [];
  }
}
