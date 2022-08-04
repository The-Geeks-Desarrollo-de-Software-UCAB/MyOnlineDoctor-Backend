import { AgendarCitaService } from "../../src/modules/cita/application/services/agendarCita.service";
import { NotificacionServiceMock } from "../adapter-mocks/notificacion-service.mock";
import { CitaObjectMother } from "../object-mothers/cita.object-mother";
import { DoctorObjectMother } from "../object-mothers/doctor.object-mother";
import { PacienteObjectMother } from "../object-mothers/paciente.object-mother"
import { RepoCitaMock } from "../repository-mocks/cita.repository.mock";
import { RepoDoctorMock } from "../repository-mocks/doctor.repository.mock";
import { RepoPacienteMock } from "../repository-mocks/paciente.repository.mock";


describe('Un doctor agenda una cita que se le solicitó', () => {

    it('deberia retornar la cita agendada', async () => {

        //Arrange
        const paciente = PacienteObjectMother.crearPacienteActivo();
        const doctor = DoctorObjectMother.crearDoctorActivo();
        const cita = CitaObjectMother.crearCitaSolicitada(paciente.idPaciente.id, doctor.id.id);

        const repoPacienteMock = new RepoPacienteMock();
        await repoPacienteMock.guardarPaciente(paciente);

        const repoDoctorMock = new RepoDoctorMock();
        await repoDoctorMock.guardarDoctor(doctor);

        const repoCitaMock = new RepoCitaMock();
        await repoCitaMock.guardarCita(cita);

        const notificacionServiceMock = new NotificacionServiceMock();

        const servicio = new AgendarCitaService(repoCitaMock, repoDoctorMock, notificacionServiceMock);

        let fecha = new Date();
        fecha.setDate(fecha.getDate() + 1);

        //Act
        const action = async () => {
            await servicio.execute(doctor.id.id, paciente.idPaciente.id, fecha);
        }

        //Assert
        expect(action).toBeTruthy();
        
    })
});