import { PacienteEntity } from "../../src/modules/paciente/domain/entities/paciente";
import { IdPaciente } from "../../src/modules/paciente/domain/value-objects/idPaciente.value-object";
import { Correo } from "../../src/modules/paciente/domain/value-objects/correo.value-object";
import { Nombre } from "../../src/modules/paciente/domain/value-objects/nombre.value-object";
import { Apellido } from "../../src/modules/paciente/domain/value-objects/apellido.value-object";
import { Alergia } from "../../src/modules/paciente/domain/value-objects/alergia.value-object";
import { Altura } from "../../src/modules/paciente/domain/value-objects/altura.value-object";
import { Antecedente } from "../../src/modules/paciente/domain/value-objects/antecedente.value-object";
import { FechaNacimiento } from "../../src/modules/paciente/domain/value-objects/fechanacimiento.value-object";
import { Genero } from "../../src/modules/paciente/domain/value-objects/genero.value-object";
import { NumeroMovil } from "../../src/modules/paciente/domain/value-objects/numeromovil.value-object";
import { Operacion } from "../../src/modules/paciente/domain/value-objects/operacion.value-object";
import { Usuario } from "../../src/modules/paciente/domain/value-objects/usuario.value-object";
import { Password } from "../../src/modules/paciente/domain/value-objects/password.value-object";
import { Peso } from "../../src/modules/paciente/domain/value-objects/peso.value-object";
import { EstadoSuscripcion } from "../../src/modules/paciente/domain/value-objects/estadosuscripcion.value-object";

export class PacienteObjectMother {
    static crearPacienteActivo(): PacienteEntity {
        return new PacienteEntity(
            new IdPaciente("00000000-0000-0000-0000-000000000000"),
            new Correo("juan@test.com"),
            new Nombre("Juan","Antonio"),
            new Apellido("Perez","Perez"),
            new Alergia("Mani"),
            new Altura(180),
            new Antecedente("Gripe"),
            new FechaNacimiento(new Date("2000-01-01")),
            new Genero("M"),
            new NumeroMovil("123456789"),
            new Operacion("Cirugia de cabeza"),
            new Usuario("juan123"),
            new Password("juan123"),
            new Peso(80),
            EstadoSuscripcion.ACTIVA
        )
    }

    static crearPacienteSuspendido(): PacienteEntity {
        return new PacienteEntity(
            new IdPaciente("00000000-0000-0000-0000-000000000000"),
            new Correo("juan@test.com"),
            new Nombre("Juan","Antonio"),
            new Apellido("Perez","Perez"),
            new Alergia("Mani"),
            new Altura(180),
            new Antecedente("Gripe"),
            new FechaNacimiento(new Date("2000-01-01")),
            new Genero("M"),
            new NumeroMovil("123456789"),
            new Operacion("Cirugia de cabeza"),
            new Usuario("juan123"),
            new Password("juan123"),
            new Peso(80),
            EstadoSuscripcion.SUSPENDIDA
        )
    }

    static crearPacienteBloqueado(): PacienteEntity {
        return new PacienteEntity(
            new IdPaciente("00000000-0000-0000-0000-000000000000"),
            new Correo("juan@test.com"),
            new Nombre("Juan","Antonio"),
            new Apellido("Perez","Perez"),
            new Alergia("Mani"),
            new Altura(180),
            new Antecedente("Gripe"),
            new FechaNacimiento(new Date("2000-01-01")),
            new Genero("M"),
            new NumeroMovil("123456789"),
            new Operacion("Cirugia de cabeza"),
            new Usuario("juan123"),
            new Password("juan123"),
            new Peso(80),
            EstadoSuscripcion.BLOQUEADA
        )
    }

    static crearPacienteCancelado(): PacienteEntity {
        return new PacienteEntity(
            new IdPaciente("00000000-0000-0000-0000-000000000000"),
            new Correo("juan@test.com"),
            new Nombre("Juan","Antonio"),
            new Apellido("Perez","Perez"),
            new Alergia("Mani"),
            new Altura(180),
            new Antecedente("Gripe"),
            new FechaNacimiento(new Date("2000-01-01")),
            new Genero("M"),
            new NumeroMovil("123456789"),
            new Operacion("Cirugia de cabeza"),
            new Usuario("juan123"),
            new Password("juan123"),
            new Peso(80),
            EstadoSuscripcion.CANCELADA
        )
    }
    
}
