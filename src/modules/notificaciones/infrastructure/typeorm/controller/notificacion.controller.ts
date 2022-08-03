import { Body, Controller, Post } from '@nestjs/common';
import { PushNotificationDTO } from 'src/modules/notificaciones/dto/PushNotificationDTO';
import { NotificacionService } from '../service/notificacion.service';

@Controller('notificacion')
export class NotificacionController {

    constructor (
        private readonly pushNotificationService: NotificacionService
    ){}

    @Post()
    async send(@Body() pushNotificationDTO: PushNotificationDTO){
        return await this.pushNotificationService.send(pushNotificationDTO);
    }
}
