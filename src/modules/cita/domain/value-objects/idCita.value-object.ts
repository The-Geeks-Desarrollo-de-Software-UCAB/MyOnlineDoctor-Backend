import { ArgumentNotProvidedException } from 'src/modules/base/domain/exceptions/argument-not-provided.exception';
import {UUID} from 'src/modules/base/domain/value-objects/uuid'

export class IdCita {
    private readonly _id: string;

    constructor(id: string) {
        this.validate(id);
        this._id = id;
    }

    public get id(): string {
        return this._id;
    }

    protected validate(id: string): void{
        if(id == null || id == undefined) {
            throw new ArgumentNotProvidedException("id no fue provisto");
        }
    }
}