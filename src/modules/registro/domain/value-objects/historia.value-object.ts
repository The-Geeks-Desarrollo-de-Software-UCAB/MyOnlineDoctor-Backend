import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Historia {
    
    constructor(private readonly _historia: string){ 
        this.validate(_historia);
        this._historia = _historia;
    }

    public get historia(): string {
        return this._historia;
    }

    protected validate(historia: string): void{
        if(historia == null || historia == undefined) {
            throw new ArgumentNotProvidedException("historia no fue provisto");
        }
        if(historia.length > 30) {
            throw new ArgumentOutOfRangeException("historia esta fuera de rango");
        }
    }
}