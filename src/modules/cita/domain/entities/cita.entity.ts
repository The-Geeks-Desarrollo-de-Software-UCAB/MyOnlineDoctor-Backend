import { AggregateRoot } from 'src/modules/base/domain/entities/aggregate-root.base';
import { ArgumentInvalidException } from 'src/modules/base/domain/exceptions/argument-invalid.exception';
import { IdDoctor } from 'src/modules/doctor/domain/value-objects/idDoctor.value-object';
import { IdPaciente } from 'src/modules/paciente/domain/value-objects/idPaciente.value-object';
import { Calificacion } from '../value-objects/calificacion.value-object';
import { Duracion } from '../value-objects/duracion.value-object';
import { EstadoCita } from '../value-objects/estadoCita.value-object';
import { Fecha } from '../value-objects/fecha.value-object';
import { IdCita } from '../value-objects/idCita.value-object'
import { Motivo } from '../value-objects/motivo.value-object';
import { TipoCita } from '../value-objects/tipoCita.object-value';
import { decoLog } from 'src/modules/decorators/logging-decorator';

export class Cita extends AggregateRoot {
    private _identificador: IdCita;
    private _fecha?: Fecha;
    private _estado: EstadoCita;
    private _tipo: TipoCita;
    private _motivo: Motivo;
    private _duracion: Duracion
    private _calificacion? : Calificacion;
    private _identificadorPaciente: IdPaciente;
    private _identificadorDoctor: IdDoctor;

    //se debe llamar a este constructor con la fecha deseada para la cita y 
    //un object value motivo inicializado
    // de esta manera new Cita(new fecha(new Date()), new motivo('contexto'))

    constructor( 
        motivo: Motivo, 
        tipo: TipoCita, 
        duracion: Duracion, 
        idPaciente: IdPaciente, 
        idDoctor: IdDoctor){

        super();
        this._identificador = new IdCita();
        this._fecha = null;
        this._estado = EstadoCita.SOLICITADA;
        this._tipo = tipo;
        this._motivo = motivo;
        this._duracion = duracion;
        this._identificadorPaciente = idPaciente;
        this._identificadorDoctor = idDoctor;
    }

    @decoLog()
    public get id(): string {
        return this._identificador.id.value
    }

    @decoLog()
    public get fecha(): Date {
        return this._fecha.fecha
    }

    @decoLog()
    public get estado(): EstadoCita {
        return this._estado
    }

    @decoLog()
    public get tipo(): TipoCita {
        return this._tipo
    }

    @decoLog()
    public get motivo(): string {
        return this._motivo.motivo
    }

    @decoLog()
    public get duracion(): number {
        return this._duracion.duracion
    }

    @decoLog()
    public get calificacion(): number {
        return this._calificacion.puntuacion;
    }

    @decoLog()
    get identificadorPaciente(): string {
        return this._identificadorPaciente.id.value
    }

    @decoLog()
    get identificadorDoctor(): string {
        return this._identificadorDoctor.id.value
    }

    @decoLog()
    public calificar(puntuacion: number): void {
        this._calificacion = new Calificacion (puntuacion);
    }

    @decoLog()
    public agendar(fecha: Fecha) {
        this.validate(fecha);
        this._fecha = fecha;
    }

    @decoLog()
    protected validate(fecha: Fecha){
        if(fecha.fecha < new Date()) {
            throw new ArgumentInvalidException("fecha agendada no puede ser menor a fecha actual");
        }
    }
}