import { DomainEvent } from 'src/modules/base/domain/events/domain-event.base';
import { UUID } from 'src/modules/base/domain/value-objects/uuid';

// DomainEvent is a plain object with properties
export class PacienteCreadoDomainEvent extends DomainEvent {

 
  readonly idPaciente: UUID;
  
  readonly alergia: string;

  readonly altura: string;

  readonly antecedente: string;

  readonly primerapellido: string;

  readonly segundoapellido: string;

  readonly correo: string;

  readonly estadosuscripcion: string;

  readonly fechanacimiento: Date;

  readonly genero: string;

  readonly primernombre: string;

  readonly segundonombre: string;

  readonly numeromovil: string;

  readonly operacion: string;

  readonly password: string;

  readonly peso: number;

}

