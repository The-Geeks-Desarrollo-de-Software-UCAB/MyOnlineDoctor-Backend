import { Doctor } from "./Doctor";
import { Paciente } from "./Paciente";
export declare class Cita {
    id_cita: string;
    fecha: Date;
    duracion: number;
    tipoCita: string;
    estadoCita: string;
    motivo: string;
    doctor: Doctor;
    paciente: Paciente;
    calificacion: number;

    constructor(id_cita: string, fecha: Date, duracion: number, tipoCita: string, estadoCita: string, motivo: string, doctor: Doctor, paciente: Paciente, calificacion: number);
    
}
