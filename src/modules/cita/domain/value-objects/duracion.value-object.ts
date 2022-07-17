export class Duracion {
    //tal vez es mejor hacer un enumerado
    constructor(private readonly _duracion: number){
        if (Number.isInteger(_duracion)){
            this._duracion = _duracion
        }
        else throw new console.error('duracion invalida');        
     }

    public get duracion(): number {
        return this.duracion;
    }
}