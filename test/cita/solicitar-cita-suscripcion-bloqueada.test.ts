import { SolicitarCitaService } from "../../src/modules/cita/application/services/solicitarCita.service";
import { DoctorObjectMother } from "../object-mothers/doctor.object-mother";
import { PacienteObjectMother } from "../object-mothers/paciente.object-mother"
import { RepoCitaMock } from "../repository-mocks/cita.repository.mock";
import { RepoDoctorMock } from "../repository-mocks/doctor.repository.mock";
import { RepoPacienteMock } from "../repository-mocks/paciente.repository.mock";


describe('Un paciente con suscripción bloqueada solicita una cita a un doctor activo', () => {

    it('deberia retornar un error', async () => {

        //Arrange
        const paciente = PacienteObjectMother.crearPacienteBloqueado();
        const doctor = DoctorObjectMother.crearDoctorActivo();

        const repoPacienteMock = new RepoPacienteMock();
        await repoPacienteMock.guardarPaciente(paciente);

        const repoDoctorMock = new RepoDoctorMock();
        await repoDoctorMock.guardarDoctor(doctor);

        const repoCitaMock = new RepoCitaMock();

        const servicio = new SolicitarCitaService(repoCitaMock, repoDoctorMock, repoPacienteMock);

        //Act
        const action = async () => {
            await servicio.execute('00000000-0000-0000-0000-000000000000', 2, "VIRTUAL", "motivo", paciente.idPaciente.id, doctor.id.id);
        }

        //Assert
        expect(action()).rejects.toThrow(Error);
        
    })
});