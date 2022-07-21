import { IsString, IsEmail } from 'class-validator';

export class RegistroDomain {
    @IsString()
    readonly idHistoria: string;

    @IsString()
    readonly diagnostico: string;

    @IsString()
    readonly plan: string;
    @IsString()
    readonly preescripcion: string;
    @IsString()
    readonly examen: string;
}