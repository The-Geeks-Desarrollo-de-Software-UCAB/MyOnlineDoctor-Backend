import { AceptarFechaCitaService } from "../../src/modules/cita/application/services/aceptarFecha.service";
import { CitaObjectMother } from "../object-mothers/cita.object-mother";
import { DoctorObjectMother } from "../object-mothers/doctor.object-mother";
import { PacienteObjectMother } from "../object-mothers/paciente.object-mother"
import { RepoCitaMock } from "../repository-mocks/cita.repository.mock";
import { RepoDoctorMock } from "../repository-mocks/doctor.repository.mock";
import { RepoPacienteMock } from "../repository-mocks/paciente.repository.mock";


describe('Un paciente acepta una cita que se le agendó a otro paciente', () => {

    it('deberia retornar un error', async () => {

        //Arrange
        const paciente = PacienteObjectMother.crearPacienteActivo();
        const paciente2 = PacienteObjectMother.crearPacienteActivo();
        const doctor = DoctorObjectMother.crearDoctorActivo();
        const cita = CitaObjectMother.crearCitaAgendada(paciente.idPaciente.id, doctor.id.id);

        const repoPacienteMock = new RepoPacienteMock();
        await repoPacienteMock.guardarPaciente(paciente);

        const repoDoctorMock = new RepoDoctorMock();
        await repoDoctorMock.guardarDoctor(doctor);

        const repoCitaMock = new RepoCitaMock();
        await repoCitaMock.guardarCita(cita);

        const servicio = new AceptarFechaCitaService(repoCitaMock, repoPacienteMock);

        //Act
        const action = async () => {
            await servicio.execute(doctor.id.id, paciente2.idPaciente.id);
        }

        //Assert
        expect(action()).rejects.toThrow(Error);
        
    })
});