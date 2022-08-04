import { randomUUID } from "crypto";
import { CitaEntity } from "../../src/modules/cita/domain/entities/cita";
import { Duracion } from "../../src/modules/cita/domain/value-objects/duracion.value-object";
import { EstadoCita } from "../../src/modules/cita/domain/value-objects/estadoCita.value-object";
import { Fecha } from "../../src/modules/cita/domain/value-objects/fecha.value-object";
import { IdCita } from "../../src/modules/cita/domain/value-objects/idCita.value-object";
import { Motivo } from "../../src/modules/cita/domain/value-objects/motivo.value-object";
import { TipoCita } from "../../src/modules/cita/domain/value-objects/tipoCita.object-value";
import { IdDoctor } from "../../src/modules/doctor/domain/value-objects/idDoctor.value-object";
import { IdPaciente } from "../../src/modules/paciente/domain/value-objects/idPaciente.value-object";

export class CitaObjectMother {
    static crearCitaSolicitada(id_paciente: string, id_doctor: string): CitaEntity {
        return new CitaEntity(
            new IdCita(randomUUID()),
            null,
            EstadoCita.SOLICITADA,
            TipoCita.VIRTUAL,
            new Motivo("Motivo de la cita"),
            new Duracion(2),
            null,
            new IdPaciente(id_paciente),
            new IdDoctor(id_doctor)
        );
    }

    static crearCitaAgendada(id_paciente: string, id_doctor: string): CitaEntity {
        let fecha = new Date();
        fecha.setDate(fecha.getDate() + 1);
        return new CitaEntity(
            new IdCita(randomUUID()),
            new Fecha(fecha),
            EstadoCita.AGENDADA,
            TipoCita.VIRTUAL,
            new Motivo("Motivo de la cita"),
            new Duracion(2),
            null,
            new IdPaciente(id_paciente),
            new IdDoctor(id_doctor)
        );
    }
}