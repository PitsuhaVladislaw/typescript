export class Car {
    constructor(public brand: string) { }
    start(): void {
        console.log(`Starting the ${this.brand} car.`);
    }
}