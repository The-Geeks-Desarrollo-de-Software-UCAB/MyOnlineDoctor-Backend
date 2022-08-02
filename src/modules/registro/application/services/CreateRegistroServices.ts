import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateRegistroService } from '../interfaces/ICreateRegistro';
import { Repository } from 'typeorm';
import { RegistroEntity } from '../../domain/entities/registro';
import { Registro } from '../../infrastructure/entities/registro.entity';

/*

@Injectable()
export class CreateRegistroService implements ICreateRegistroService {
    constructor(
        @InjectRepository(Registro) private RegistroRepository: Repository<Registro>
    ) { }
    async create(registro: RegistroEntity): Promise<RegistroEntity> {
        return this.RegistroRepository.save(registro);
    }
}

*/