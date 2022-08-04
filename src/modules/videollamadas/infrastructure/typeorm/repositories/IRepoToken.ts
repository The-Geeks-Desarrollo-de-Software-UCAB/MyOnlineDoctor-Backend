import { CitaEntity } from "src/modules/cita/domain/entities/cita";
import { Cita } from "src/modules/cita/infrastructure/typeorm/entities/cita.entity";
import { Token } from "../entities/token.entity";

export interface IRepoToken {
    guardarToken(cita: string, token: string): Promise<Token>;

  }
  