export class Calificacion {
    constructor(private readonly _puntuacion: number){ 
        if (Number.isInteger(_puntuacion)){
            this._puntuacion = _puntuacion
        }
        else throw new console.error('duracion invalida'); // cambiar por error
    }

    public get puntuacion(): number {
        return this._puntuacion
    }

}