import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroController } from '../infrastructure/controller/controller';
import { CreateRegistroService } from '../application/services/CreateRegistroServices';

import { Registro } from '../infrastructure/entities/registro.entity';
import { TYPES } from '../application/interfaces/types';
import { GetRegistroService } from '../application/services/GetRegistroServices';

const createRegistro = { provide: TYPES.services.ICreateUserService, useClass: CreateRegistroService };
const getRegistro = { provide: TYPES.services.IGetUserService, useClass: GetRegistroService };
@Module({
    imports: [TypeOrmModule.forFeature([Registro])],
    controllers: [RegistroController],
    providers: [createRegistro, getRegistro],
})
export class RegistroModule { }