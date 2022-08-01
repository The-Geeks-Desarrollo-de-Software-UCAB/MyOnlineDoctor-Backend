import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registro } from '../../infrastructure/entities/registro.entity';
import { RegistroEntity } from '../../domain/entities/registro';
import { IGetRegistroService } from '../interfaces/IGetRegistro'

@Injectable()
export class GetRegistroService implements IGetRegistroService {
    constructor(@InjectRepository(Registro) private usersRepository: Repository<Registro>) { }

    async getById(id: string): Promise<RegistroEntity> {
        return this.usersRepository.findOne({ where: { registroId: id } });
    }
}