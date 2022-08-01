import { RegistroEntity } from "../../domain/entities/registro";

export interface ICreateRegistroService {
    create(registroDomain: RegistroEntity): Promise<RegistroEntity>;
}