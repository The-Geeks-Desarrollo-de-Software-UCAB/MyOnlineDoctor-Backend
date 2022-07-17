export class Nombre {
    
  constructor(private readonly _primernombre: string, private readonly _segundonombre: string){ }

  public get primernombre(): string {
      return this.primernombre;
  }

  public get segundonombre(): string {
    return this.segundonombre;
}

}