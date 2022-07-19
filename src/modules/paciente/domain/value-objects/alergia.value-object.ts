import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Alergia {
    
    constructor(private readonly _alergia: string){ }

    public get alergia(): string {
        return this._alergia;
    }

    protected validate(): void{
        if(this._alergia == null || this._alergia == undefined) {
            throw new ArgumentNotProvidedException("alergia no fue provisto")
        }
        if(this._alergia.length > 30) {
            throw new ArgumentOutOfRangeException("alergia esta fuera de rango")
        }
    }
}