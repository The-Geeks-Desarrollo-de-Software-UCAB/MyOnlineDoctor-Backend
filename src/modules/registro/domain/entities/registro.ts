import { IdRegistro } from '../value-objects/idRegistro.value-object';
import { Prescripcion } from '../value-objects/prescripcion.value-object';
import { Historia } from '../value-objects/historia.value-object';
import { Diagnostico } from '../value-objects/diagnostico.value-object';
import { Plan } from '../value-objects/plan.value-object';
import { Examen } from '../value-objects/examen.value-object';
import { Fecha } from '../value-objects/fecha.value-object';

export class RegistroDomain {
  readonly idHistoria: string;

  readonly diagnostico: string;

  readonly plan: string;

  readonly preescripcion: string;

  readonly examen: string;
}
