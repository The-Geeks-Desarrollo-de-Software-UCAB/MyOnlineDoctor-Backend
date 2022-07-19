import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Motivo {
    
    constructor(private readonly _motivo: string){ 
        this.validate(_motivo);
        this._motivo = _motivo;
    }

    public get motivo(): string {
        return this._motivo;
    }

    protected validate(motivo: string): void{
        if(motivo == null || motivo == undefined) {
            throw new ArgumentNotProvidedException("motivo no fue provisto");
        }
        if(motivo.length > 30) {
            throw new ArgumentOutOfRangeException("motivo esta fuera de rango");
        }
    }
}