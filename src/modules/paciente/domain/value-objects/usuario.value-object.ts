import { ArgumentNotProvidedException } from 'src/modules/base/domain/exceptions/argument-not-provided.exception';
import { ArgumentOutOfRangeException } from 'src/modules/base/domain/exceptions/argument-out-of-range.exception';

export class Usuario {
  constructor(private readonly _usuario: string) {
    this.validate(_usuario);
    this._usuario = _usuario;
  }

  public get usuario(): string {
    return this._usuario;
  }

  protected validate(usuario: string): void {
    if (usuario == null || usuario == undefined) {
      throw new ArgumentNotProvidedException('usuario no fue provisto');
    }
    if (usuario.length > 30) {
      throw new ArgumentOutOfRangeException('usuario esta fuera de rango');
    }
  }
}
