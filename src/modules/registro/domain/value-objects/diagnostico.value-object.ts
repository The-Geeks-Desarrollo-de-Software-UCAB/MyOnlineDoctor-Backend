import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Diagnostico {
    
    constructor(private readonly _diagnostico: string){ 
        this.validate(_diagnostico);
        this._diagnostico = _diagnostico;
    }

    public get diagnostico(): string {
        return this._diagnostico;
    }

    protected validate(diagnostico: string): void{
        if(diagnostico == null || diagnostico == undefined) {
            throw new ArgumentNotProvidedException("diagnostico no fue provisto");
        }
        if(diagnostico.length > 30) {
            throw new ArgumentOutOfRangeException("diagnostico esta fuera de rango");
        }
    }
}