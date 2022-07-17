import { UUID } from "src/modules/base/domain/value-objects/uuid"

export class IdDoctor {
    private readonly _id: UUID;

    constructor(){
        this._id = UUID.generate();
    }

    public get id(): UUID {
        return this._id;
    } 
}