import { DomainEvent } from '../events/domain-event.base';
import { decoLog } from 'src/modules/decorators/logging-decorator';

export abstract class AggregateRoot {
  private _domainEvents: DomainEvent[] = [];


  @decoLog()
  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  @decoLog()
  protected agregarEvento(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
  }

  @decoLog()
  public limpiarEventos(): void {
    this._domainEvents = [];
  }
}