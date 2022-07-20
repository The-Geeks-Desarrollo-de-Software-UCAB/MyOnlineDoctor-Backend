
import { identity } from "rxjs";
import { IdDoctor } from "src/modules/doctor/domain/value-objects/idDoctor.value-object";
import { IdPaciente } from "src/modules/paciente/domain/value-objects/idPaciente.value-object";
import { CitaEntity } from "../domain/entities/cita.entity";
import { Calificacion } from "../domain/value-objects/calificacion.value-object";
import { Duracion } from "../domain/value-objects/duracion.value-object";
import { EstadoCita } from "../domain/value-objects/estadoCita.value-object";
import { Fecha } from "../domain/value-objects/fecha.value-object";
import { IdCita } from "../domain/value-objects/idCita.value-object";
import { Motivo } from "../domain/value-objects/motivo.value-object";
import { TipoCita } from "../domain/value-objects/tipoCita.object-value";
import { Cita } from "./typeorm/Entities/cita.entity";

export class CitaOrmMapper {
    public static toEntity(cita: Cita): CitaEntity {
        const citaEntity = new CitaEntity(
            new IdCita(cita.id_cita),
            new Fecha(cita.fecha),
            new EstadoCita[cita.estadoCita],
            new TipoCita[cita.tipoCita],
            new Motivo(cita.motivo),
            new Duracion(cita.duracion),
            new Calificacion(cita.calificacion),
            new IdPaciente(cita.paciente.id_paciente),
            new IdDoctor(cita.doctor.id_doctor)
        );
        return citaEntity;
    }
    /*
    public static toDomain(cita: CitaEntity): Cita {
        return {
            id_cita: cita.id,
            fecha: cita.fecha,
            duracion: cita.duracion,
            tipoCita: cita.tipo,
            estadoCita: cita.estado,
            motivo: cita.motivo,
            doctor: cita.identificadorDoctor, // Aquí hay que buscar al doctor que tenga este id
            paciente: cita.identificadorPaciente,
            calificacion: cita.calificacion
        }
    }
    */
}