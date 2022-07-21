import { CitaEntity } from '../entities/cita.entity';

export class CalcularValidezVideollamadaService {

  
  esValida(cita: CitaEntity): boolean {
   const now = new Date();

    if ((now.getTime() - cita.fecha.getTime() >= 0) && (now.getTime() - cita.fecha.getTime()  <= 3600000)) {
    return true;
    }

    else {
    return false;
    }  
  }

  
}