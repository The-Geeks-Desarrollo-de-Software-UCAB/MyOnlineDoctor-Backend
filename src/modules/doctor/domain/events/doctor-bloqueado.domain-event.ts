export class DoctorBloqueadoDomainEvent {
    private constructor(private readonly razon: string) {
        this.razon = razon;
    }
}