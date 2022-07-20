import { AggregateRoot } from "src/modules/base/domain/entities/aggregate-root.base";
import { Historia } from "../value-objects/historia";
import { Diagnostico } from "../value-objects/diagnostico";
import { Plan } from "../value-objects/plan";
import { preescripcion } from "../value-objects/preescripcion";
import { examen } from "../value-objects/examen-realizar";


export class RegistroEntity extends AggregateRoot {
    constructor(
        private id: Historia,
        private diagnostico: Diagnostico,
        private plan: Plan,
        private preescripcion: preescripcion,
        private examen: examen
    ) {
        super();
    }


    getId = (): Historia => this.id;
    getDiagnostico = (): Diagnostico => this.diagnostico;
    getplan = (): Plan => this.plan;
    getpreescripcion = (): preescripcion => this.preescripcion;
    getexamen = (): examen => this.examen;

}