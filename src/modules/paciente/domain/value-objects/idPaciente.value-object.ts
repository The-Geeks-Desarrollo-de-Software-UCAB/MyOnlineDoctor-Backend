import { ArgumentNotProvidedException } from 'src/modules/base/domain/exceptions/argument-not-provided.exception';
import {UUID} from 'src/modules/base/domain/value-objects/uuid'

export class IdPaciente {
    private readonly _id: UUID;

    constructor(){
        const id = UUID.generate();
        this.validate(id);
        this._id = id;
    }

    public get id(): UUID {
        return this._id;
    }

    protected validate(id: UUID): void{
        if(id == null || id == undefined) {
            throw new ArgumentNotProvidedException("id no fue provisto")
        }
    }
}