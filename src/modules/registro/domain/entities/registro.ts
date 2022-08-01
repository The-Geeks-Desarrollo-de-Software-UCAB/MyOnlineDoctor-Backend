import { Diagnostico } from '../value-objects/diagnostico';
import { examen } from '../value-objects/examen-realizar';
import { Historia } from '../value-objects/historia';
import { Plan } from '../value-objects/plan';
import { preescripcion } from '../value-objects/preescripcion';

export class RegistroDomain {
  readonly idHistoria: string;

  readonly diagnostico: string;

  readonly plan: string;

  readonly preescripcion: string;

  readonly examen: string;
}
