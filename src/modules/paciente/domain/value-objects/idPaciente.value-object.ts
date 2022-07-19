import { ArgumentNotProvidedException } from 'src/modules/base/domain/exceptions/argument-not-provided.exception';
import {UUID} from 'src/modules/base/domain/value-objects/uuid'

export class IdPaciente {
    private readonly _id: UUID;

    constructor(){
        this._id = UUID.generate();
    }

    public get id(): UUID {
        return this._id;
    }

    protected validate(): void{
        if(this._id == null || this._id == undefined) {
            throw new ArgumentNotProvidedException("id no fue provisto")
        }
    }
}