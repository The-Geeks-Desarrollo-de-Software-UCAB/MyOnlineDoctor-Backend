import { RegistroDomain } from "../domain/entities/registro.domain.entity";

export interface IGetRegistroService {
    getById(id: string): Promise<RegistroDomain>;
}