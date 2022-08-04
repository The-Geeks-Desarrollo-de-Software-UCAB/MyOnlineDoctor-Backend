import { Controller, Get, Param } from '@nestjs/common';
import { VideollamadaService } from '../service/videollamada.service';

@Controller('api/videollamada')
export class VideollamadaController {

    constructor (
        private readonly videollamadaService: VideollamadaService
    ){}
    @Get('CitaPorID:id_cita')
    async generarToken(@Param('id_cita') id_cita: string){
        return await this.videollamadaService.generarTokenRTC(id_cita);
    }
}
