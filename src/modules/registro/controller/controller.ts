import { Controller, Inject, Post, Res, Body, HttpStatus, UsePipes, Get, Param, ParseUUIDPipe, ValidationPipe } from '@nestjs/common';

import { TYPES } from '../interfaces/types';
import { ICreateRegistroService } from '../interfaces/ICreateRegistro';
import { RegistroDomain } from '../domain/entities/registro.domain.entity';
import { IGetRegistroService } from '../interfaces/IGetRegistro';


@Controller('registro')
export class RegistroController {
    constructor(
        @Inject(TYPES.services.ICreateUserService) private createRegistro: ICreateRegistroService,
        @Inject(TYPES.services.IGetUserService) private getRegistro: IGetRegistroService,
    ) { }

    @UsePipes(new ValidationPipe())
    @Post('/create')
    async create(@Res() res, @Body() RegistroDomain: RegistroDomain) {
        const stock = await this.createRegistro.create(RegistroDomain);
        return res.status(HttpStatus.OK).json(stock);
    }
    @Get(':id')
    async findOne(@Param('id', new ParseUUIDPipe()) id) {
        const registro = await this.getRegistro.getById(id);
        return registro;
    }
}