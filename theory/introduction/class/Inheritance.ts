class AnimalI {
    public name: string

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {
        console.log(`${this.name} make sound`);
    }
}

class DogI extends AnimalI {
    public makeSound(): void {
        console.log("Dog barks");
    }
}

const dogI = new DogI("Buddy");
dogI.makeSound();



class AnimalI2 {
    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class DogI2 extends AnimalI2 {
    makeSound(): void {
        console.log("Dog barks");
    }
}

class CatI2 extends AnimalI2 {
    makeSound(): void {
        console.log("Cat meows");
    }
}

function makeAnimalsound(animal: AnimalI2) {
    animal.makeSound();
}

const dog2 = new DogI2();
const cat2 = new CatI2();

makeAnimalsound(dog2);
makeAnimalsound(cat2);



abstract class ShapeI {
    abstract calculateArea(): number;
}

class CircleI extends ShapeI {
    constructor(private raduis: number) {
        super()
    }

    calculateArea(): number {
        return this.raduis * this.raduis;
    }
}

class RectangleI extends ShapeI {
    constructor(private width: number, private height: number) {
        super();
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const circleI = new CircleI(5);
const rectangle = new RectangleI(3, 5);

console.log(circleI.calculateArea());
console.log(rectangle.calculateArea());



interface Shapell {
    calculateArea(): number;
}

class Circlell implements Shapell {
    constructor(private raduis: number) {}

    calculateArea(): number {
        return Math.PI * this.raduis * this.raduis;
    }
}

class Rectanglell implements Shapell {
    constructor( private width: number, private height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }
}

function calculateTotalArea(shapes: Shapell[]) {
    let totalArea = 0;
    shapes.forEach(shape => {
        totalArea += shape.calculateArea();
    });

    return totalArea; 
}

const circlell = new Circlell(4);
const rectanglell = new Rectanglell(4, 5);

const totalArea = calculateTotalArea([circleI, rectangle]);
console.log(totalArea);