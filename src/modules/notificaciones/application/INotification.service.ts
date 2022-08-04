import { PushNotificationDTO } from './dto/PushNotificationDTO';

export interface INotificacionService {
  enviarNotificacionPaciente(
    title: string,
    body: string,
    id_paciente: string,
  ): void;
  send(pushNotificationDTO: PushNotificationDTO): void;
  guardarDispositivo(id_paciente: string, token: string): void;
}
