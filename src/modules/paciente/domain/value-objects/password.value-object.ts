import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Password {
    
  constructor(private readonly _password: string){ }

  public get password(): string {
      return this._password;
  }

  protected validate(): void{
    if(this._password == null || this._password == undefined) {
        throw new ArgumentNotProvidedException("password no fue provisto")
    }
    if(this._password.length > 30) {
        throw new ArgumentOutOfRangeException("password esta fuera de rango")
    }
  }
}