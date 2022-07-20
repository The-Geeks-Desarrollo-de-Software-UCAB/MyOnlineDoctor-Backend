import { Cita } from '../entities/cita.entity';
import { decoLog } from 'src/modules/decorators/logging-decorator';

export class CalcularValidezVideollamadaService {

  @decoLog()
  esValida(cita: Cita): boolean {
   const now = new Date();

    if ((now.getTime() - cita.fecha.getTime() >= 0) && (now.getTime() - cita.fecha.getTime()  <= 3600000)) {
    return true;
    }

    else {
    return false;
    }  
  }

  
}