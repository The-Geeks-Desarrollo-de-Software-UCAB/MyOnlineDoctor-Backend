import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroController } from './controller/controller';
import { CreateRegistroService } from './services/CreateRegistroServices';

import { Registro } from './domain/entities/registro.entity';
import { TYPES } from './interfaces/types';
import { GetRegistroService } from './services/GetRegistroServices';

const createRegistro = { provide: TYPES.services.ICreateUserService, useClass: CreateRegistroService };
const getRegistro = { provide: TYPES.services.IGetUserService, useClass: GetRegistroService };
@Module({
    imports: [TypeOrmModule.forFeature([Registro])],
    controllers: [RegistroController],
    providers: [createRegistro, getRegistro],
})
export class RegistroModule { }