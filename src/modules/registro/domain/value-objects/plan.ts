export class Plan {
    constructor(
        private readonly plan: string
    ) { }

    getPlan = (): string => this.plan;

}