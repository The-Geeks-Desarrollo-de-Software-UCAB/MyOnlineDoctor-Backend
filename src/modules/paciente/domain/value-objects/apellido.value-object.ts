export class Apellido {
    
  constructor(private readonly _primerapellido: string, private readonly _segundoapellido: string){ }

  public get primerapellido(): string {
      return this.primerapellido;
  }

  public get segundoapellido(): string {
    return this.segundoapellido;
}

}