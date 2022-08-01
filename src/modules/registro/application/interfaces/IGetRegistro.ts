import { RegistroEntity } from "../../domain/entities/registro";

export interface IGetRegistroService {
    getById(id: string): Promise<RegistroEntity>;
}