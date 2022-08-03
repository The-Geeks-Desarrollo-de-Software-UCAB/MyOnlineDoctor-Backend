
import { Dispositivo } from "../entities/dispositivo.entity";

export interface IRepoDispositivo {
    guardarDispositivo(paciente: string, token: string): Promise<Dispositivo>;
    encontrarDispositivoPorId(paciente: string): Promise<Dispositivo[]>;
  }
  