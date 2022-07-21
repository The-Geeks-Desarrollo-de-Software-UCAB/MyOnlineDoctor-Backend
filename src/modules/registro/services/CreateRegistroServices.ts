import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateRegistroService } from '../interfaces/ICreateRegistro';
import { Repository } from 'typeorm';
import { RegistroDomain } from '../domain/entities/registro.domain.entity';
import { Registro } from '../domain/entities/registro.entity';



@Injectable()
export class CreateRegistroService implements ICreateRegistroService {
    constructor(
        @InjectRepository(Registro) private RegistroRepository: Repository<Registro>
    ) { }
    async create(registro: RegistroDomain): Promise<RegistroDomain> {
        return this.RegistroRepository.save(registro);
    }
}

