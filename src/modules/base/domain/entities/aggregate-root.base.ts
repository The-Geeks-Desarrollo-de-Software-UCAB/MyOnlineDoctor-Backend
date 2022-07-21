import { DomainEvent } from '../events/domain-event.base';


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