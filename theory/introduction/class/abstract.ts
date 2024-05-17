abstract class AnimalAB {
    abstract makeSound(): void;
    move(): void {
        console.log("Roaming the earth...");
    }
}

class DogAB extends AnimalAB {
    makeSound(): void {
        console.log("WOOF, WOOF");
    }
}

let myDogAB: AnimalAB = new DogAB();
myDogAB.move();
myDogAB.makeSound();



abstract class ShapeAB {
    abstract calculateArea(): number;

    display(): void {
        console.log("Calculating area...");
    }
}

class CircleAB extends ShapeAB {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const circleAB = new CircleAB(5);
console.log(circleAB.calculateArea());
circleAB.display();



abstract class VehicleAB {
    constructor(private brand: string) {}

    abstract drive(): void;

    displayInfo() {
        console.log(`Brand: ${this.brand}`);
    }
}

class CarAB extends VehicleAB {
    drive(): void {
        console.log("Driving the car...");
    }
}

const carAB = new CarAB("Toyota");
carAB.displayInfo();
carAB.drive();



abstract class ShapeAV {
    abstract calculateArea(): number;

    display(): void {
        console.log("Calculating area....");
    }
}

class RectangleAV extends ShapeAV {
    constructor(private width: number, private heigh: number) {
        super();
    }

    calculateArea(): number {
        return this.width * this.heigh;
    }
}

class CircleAV extends ShapeAV {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}


const rectangleAV = new RectangleAV(4, 6);
console.log(rectangleAV.calculateArea());
rectangleAV.display();

const circleAV = new CircleAV(5);
console.log(circleAV.calculateArea());
circleAV.display();