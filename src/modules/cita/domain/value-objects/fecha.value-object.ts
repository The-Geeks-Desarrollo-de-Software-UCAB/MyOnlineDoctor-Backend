export class Fecha {
  constructor(private readonly _fecha: Date) {
    this._fecha; //validate(_fecha);
    this._fecha = _fecha;
  }

  public get fecha(): Date {
    return this.fecha;
  }
}
