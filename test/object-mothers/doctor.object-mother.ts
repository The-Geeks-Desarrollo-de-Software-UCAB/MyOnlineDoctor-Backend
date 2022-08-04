import { DoctorEntity } from "../../src/modules/doctor/domain/entities/doctor";
import { Apellido } from "../../src/modules/doctor/domain/value-objects/apellido.value-object";
import { EspecialidadDomain } from "../../src/modules/doctor/domain/value-objects/especialidad.value-object";
import { Estado } from "../../src/modules/doctor/domain/value-objects/estado.value-object";
import { IdDoctor } from "../../src/modules/doctor/domain/value-objects/idDoctor.value-object";
import { Localizacion } from "../../src/modules/doctor/domain/value-objects/localizacion.value-object";
import { Nombre } from "../../src/modules/doctor/domain/value-objects/nombre.value-object";
import { PromedioCalificacion } from "../../src/modules/doctor/domain/value-objects/promedio-calificacion.value-object";

export class DoctorObjectMother {
    static crearDoctorActivo(): DoctorEntity {
        return new DoctorEntity(
            new IdDoctor("00000000-0000-0000-0000-000000000000"),
            new Nombre("Pedro","Fernando"),
            new Apellido("Perez","Perez"),
            [new EspecialidadDomain("Cardiología")],
            new PromedioCalificacion(5),
            new Localizacion(10, 10),
            Estado.ACTIVO
        )
    }

    static crearDoctorSuspendido(): DoctorEntity {
        return new DoctorEntity(
            new IdDoctor("00000000-0000-0000-0000-000000000000"),
            new Nombre("Pedro","Fernando"),
            new Apellido("Perez","Perez"),
            [new EspecialidadDomain("Cardiología")],
            new PromedioCalificacion(5),
            new Localizacion(10, 10),
            Estado.BLOQUEADO
        )
    }
}