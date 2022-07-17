import { Apellido } from "../value-objects/apellido.value-object";
import { Especialidad } from "../value-objects/especialidad.value-object";
import { Localizacion } from "../value-objects/localizacion.value-object";
import { Nombre } from "../value-objects/nombre.value-object";
import { PromedioCalificacion } from "../value-objects/promedio-calificacion.value-object";


export class DoctorEntity {
    private constructor(
        private readonly nombre: Nombre, 
        private readonly apellido: Apellido, 
        private readonly especialidad: Especialidad[], 
        private readonly promedioCalificacion: PromedioCalificacion, 
        private readonly localizacion: Localizacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.promedioCalificacion = promedioCalificacion;
        this.localizacion = localizacion;
    }
}