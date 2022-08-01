import { RegistroDomain } from "../../domain/entities/registro";

export interface ICreateRegistroService {
    create(registroDomain: RegistroDomain): Promise<RegistroDomain>;
}