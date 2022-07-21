import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registro } from '../domain/entities/registro.entity';
import { RegistroDomain } from '../domain/entities/registro.domain.entity';
import { IGetRegistroService } from '../interfaces/IGetRegistro'

@Injectable()
export class GetRegistroService implements IGetRegistroService {
    constructor(@InjectRepository(Registro) private usersRepository: Repository<Registro>) { }

    async getById(id: string): Promise<RegistroDomain> {
        return this.usersRepository.findOne({ where: { registroId: id } });
    }
}