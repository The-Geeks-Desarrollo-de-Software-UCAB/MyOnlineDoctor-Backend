import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { auth, ServiceAccount } from 'firebase-admin';
import * as serviceAccount from '../../../../../../credential.json';
import { PushNotificationDTO } from 'src/modules/notificaciones/application/dto/PushNotificationDTO';
import { OrmRepoDispositivo } from '../repositories/ormRepoDispositivo.repository';
import { EntityManager } from 'typeorm';
import { Dispositivo } from '../entities/dispositivo.entity';
import { INotificacionService } from 'src/modules/notificaciones/application/INotification.service';
@Injectable()
export class NotificacionService implements INotificacionService {
  private readonly ormRepoDispositivo: OrmRepoDispositivo;
  constructor(private readonly manager: EntityManager) {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as ServiceAccount),
      });
    }

    this.ormRepoDispositivo =
      this.manager.getCustomRepository(OrmRepoDispositivo);
  }

  async enviarNotificacionPaciente(
    title: string,
    body: string,
    id_paciente: string,
  ) {
    const payload = {
      notification: {
        title,
        body,
      },
    };
    let items = await this.ormRepoDispositivo.encontrarDispositivoPorId(
      id_paciente,
    );

    for (var item of items) {
      Promise.all([await admin.messaging().sendToDevice(item.token, payload)]);
    }
  }
  async send(pushNotificationDTO: PushNotificationDTO) {
    const { title, body, token, id_paciente } = pushNotificationDTO;
    console.log(title, body, token);

    const payload = {
      notification: {
        title,
        body,
      },
    };
    let items = await this.ormRepoDispositivo.encontrarDispositivoPorId(
      pushNotificationDTO.id_paciente,
    );

    for (var item of items) {
      Promise.all([await admin.messaging().sendToDevice(item.token, payload)]);
    }
  }

  async guardarDispositivo(id_paciente: string, token: string) {
    this.ormRepoDispositivo.guardarDispositivo(id_paciente, token);
  }
}
