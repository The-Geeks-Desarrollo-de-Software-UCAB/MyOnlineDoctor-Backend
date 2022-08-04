import { Body, Controller, Post } from '@nestjs/common';
import { DispositivoDto } from 'src/modules/notificaciones/dto/Dispositivo.dto';
import { PushNotificationDTO } from 'src/modules/notificaciones/dto/PushNotificationDTO';
import { NotificacionService } from '../service/notificacion.service';

@Controller('api/notificacion')
export class NotificacionController {

    constructor (
        private readonly pushNotificationService: NotificacionService
    ){}

    @Post()
    async send(@Body() pushNotificationDTO: PushNotificationDTO){
        return await this.pushNotificationService.send(pushNotificationDTO);
    }
    @Post('dispositivo')
    async guardarDispositivo(@Body() request: DispositivoDto){
        
        return await this.pushNotificationService.guardarDispositivo(request.id_paciente, request.token);
    }
}
