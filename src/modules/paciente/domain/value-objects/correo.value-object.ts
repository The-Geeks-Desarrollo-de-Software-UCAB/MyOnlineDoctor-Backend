export class Correo {
    
  constructor(private readonly _correo: string){ }

  public get correo(): string {
      return this.correo;
  }
}