import { RegistroDomain } from "../domain/entities/registro.domain.entity";

export interface ICreateRegistroService {
    create(registroDomain: RegistroDomain): Promise<RegistroDomain>;
}