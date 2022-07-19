import { throws } from "assert";
import { ArgumentNotProvidedException } from "src/modules/base/domain/exceptions/argument-not-provided.exception";
import { ArgumentOutOfRangeException } from "src/modules/base/domain/exceptions/argument-out-of-range.exception";

export class Password {
    
  constructor(private readonly _password: string){ 
    this.validate(_password);
    this._password = _password;
  }

  public get password(): string {
      return this._password;
  }

  protected validate(password: string): void{
    if(password == null || password == undefined) {
        throw new ArgumentNotProvidedException("password no fue provisto");
    }
    if(password.length > 30) {
        throw new ArgumentOutOfRangeException("password esta fuera de rango");
    }
  }
}