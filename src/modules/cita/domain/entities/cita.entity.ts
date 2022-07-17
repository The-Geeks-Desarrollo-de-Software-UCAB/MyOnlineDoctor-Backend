import { AggregateRoot } from 'src/modules/base/domain/entities/aggregate-root.base';
import { IdPaciente } from 'src/modules/paciente/domain/value-objects/idPaciente.value-object';
import { Calificacion } from '../value-objects/calificacion.value-object';
import { Duracion } from '../value-objects/duracion.value-object';
import { EstadoCita } from '../value-objects/estadoCita.value-object';
import { Fecha } from '../value-objects/fecha.value-object';
import { IdCita } from '../value-objects/idCita.value-object'
import { Motivo } from '../value-objects/motivo.value-object';
import { TipoCita } from '../value-objects/tipoCita.object-value';

export class Cita extends AggregateRoot {
    private identificador: IdCita;
    private fecha: Fecha;
    private estado: EstadoCita;
    private tipo: TipoCita;
    private motivo: Motivo;
    private duracion: Duracion
    private calificacion? : Calificacion;
    private identificadorPaciente: IdPaciente;

    //se debe llamar a este constructor con la fecha deseada para la cita y 
    //un object value motivo inicializado
    // de esta manera new Cita(new fecha(new Date()), new motivo('contexto'))

    constructor(fecha: Fecha, motivo: Motivo, tipo: TipoCita, duracion: Duracion, idPaciente: IdPaciente){
        super();
        this.identificador = new IdCita();
        this.fecha = fecha;
        this.estado = EstadoCita.SOLICITADA;
        this.tipo = tipo;
        this.motivo = motivo;
        this.duracion = duracion;
        this.identificadorPaciente = idPaciente;
    }

    public darId(): string {
        return this.identificador.id.value
    }

    public darFecha(): Date {
        return this.fecha.fecha
    }

    public darEstado(): EstadoCita {
        return this.estado
    }

    public darTipo(): TipoCita {
        return this.tipo
    }

    public darMotivo(): string {
        return this.motivo.motivo
    }

    public darDuracion(): number {
        return this.duracion.duracion
    }

    public darCalificacion(): number {
        return this.calificacion.puntuacion;
    }

    darIdentificadorPaciente(): string {
        return this.identificadorPaciente.id.value
    }

    public calificar(puntuacion: number): void {
        this.calificacion = new Calificacion (puntuacion);
    }
}