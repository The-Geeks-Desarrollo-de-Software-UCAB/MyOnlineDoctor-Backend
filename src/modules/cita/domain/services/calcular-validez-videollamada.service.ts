import { Cita } from '../entities/cita.entity';

export class CalcularValidezVideollamadaService {

  esValida(cita: Cita): boolean {
   const now = new Date();

    if ((now.getTime() - cita.darFecha().getTime() >= 0) && (now.getTime() - cita.darFecha().getTime()  <= 3600000)) {
    return true;
    }

    else {
    return false;
    }  
  }

  
}