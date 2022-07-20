import { Cita } from "src/modules/base/infrastructure/Cita";
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
    public static toDomain(citaEntity: CitaEntity): Cita {
        const cita = new Cita(
            citaEntity.id,
            citaEntity.fecha,
            citaEntity.duracion,
            citaEntity.tipo,
            citaEntity.estado,
            citaEntity.motivo,
            citaEntity.identificadorDoctor, // Aquí hay que usar repositorio para buscar al doctor y paciente
            citaEntity.identificadorPaciente,
            citaEntity.calificacion
        );
        return cita;
    }
    */
}