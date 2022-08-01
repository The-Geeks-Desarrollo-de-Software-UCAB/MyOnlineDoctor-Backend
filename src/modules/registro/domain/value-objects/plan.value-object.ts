import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Plan {
    
    constructor(private readonly _plan: string){ 
        this.validate(_plan);
        this._plan = _plan;
    }

    public get plan(): string {
        return this._plan;
    }

    protected validate(plan: string): void{
        if(plan == null || plan == undefined) {
            throw new ArgumentNotProvidedException("plan no fue provisto");
        }
        if(plan.length > 30) {
            throw new ArgumentOutOfRangeException("plan esta fuera de rango");
        }
    }
}