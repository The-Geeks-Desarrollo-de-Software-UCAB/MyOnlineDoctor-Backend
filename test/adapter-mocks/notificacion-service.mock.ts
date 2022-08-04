import { PushNotificationDTO } from "../../src/modules/notificaciones/application/dto/PushNotificationDTO";
import { INotificacionService } from "../../src/modules/notificaciones/application/INotification.service";

export class NotificacionServiceMock implements INotificacionService {
    async enviarNotificacionPaciente(
        title: string,
        body: string,
        id_paciente: string,
    ) {
        return null;
    }
    
    async send(pushNotificationDTO: PushNotificationDTO) {
        return null;
    }
    
    async guardarDispositivo(id_paciente: string, token: string) {
        return null;
    }
}