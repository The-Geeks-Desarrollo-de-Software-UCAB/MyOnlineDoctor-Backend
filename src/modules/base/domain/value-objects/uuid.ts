import {v4 as uuidV4} from 'uuid'
import { decoLog } from 'src/modules/decorators/logging-decorator';

export class UUID {
    private readonly _value: string;
    
    @decoLog()
    public get value(): string {
        return this._value;
    }

    constructor(value: string){
        this._value = value
    }

    @decoLog()
    static generate(): UUID {
        return new UUID(uuidV4());
      }
}