import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Motivo {
    
    constructor(private readonly _motivo: string){ }

    public get motivo(): string {
        return this._motivo;
    }

    protected validate(): void{
        if(this._motivo == null || this._motivo == undefined) {
            throw new ArgumentNotProvidedException("motivo no fue provisto")
        }
        if(this._motivo.length > 30) {
            throw new ArgumentOutOfRangeException("motivo esta fuera de rango")
        }
    }
}