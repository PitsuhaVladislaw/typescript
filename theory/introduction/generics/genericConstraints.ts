function logLength<T extends {length: number}>(arg: T): void {
    console.log(arg.length);
}

logLength("hello");
logLength([1, 2, 3]);



class AnimalCG {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class ZooCG <T extends AnimalCG> {
    animals: T[] = [];

    addAnimal(animal: T): void {
        this.animals.push(animal);
    }
}

const zoo = new ZooCG<AnimalCG>();
const lion = new AnimalCG('lion');
zoo.addAnimal(lion);



interface PrintableCG {
    printD(): void;
}

function printItem<T extends PrintableCG>(item: T): void {
    item.printD();
}

class BookCG implements PrintableCG {
    printD(): void {
        console.log("Printing book...");
    }
}

const bookCG = new BookCG();
printItem(bookCG);



function sumCG<T extends number>(a: T, b: T): number {
    return a + b;
}

console.log(sumCG(10, 20));



function getPropertyCG <T, k extends keyof T>(obj: T, key: k): T[k] {
    return obj[key];
}

const personCG = {name: 'Alice', age: 20}
console.log(getPropertyCG(personCG, "name"));
console.log(getPropertyCG(personCG, "age"));



class VehicleCG { 
    drive(): void {
        console.log("Driving vehicle...");
    }
}

function startVehicle<T extends VehicleCG>(vehicle: T): void {
    vehicle.drive();
}

const carCG = new VehicleCG();
startVehicle(carCG);



function getFirstElementCG<T extends any[]>(arr: T): T[0] {
    return arr[0];
}

console.log(getFirstElementCG([1, 2 , 3]));



interface ShapeCG { 
    name: string;
}

class CircleCG implements ShapeCG {
    name = "Circle";
    raduis: number;

    constructor(raduis: number) {
        this.raduis = raduis;
    }
}

class SquareCG implements ShapeCG {
    name = "Square";
    sideLength: number;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }
}

class ShapeContainerCG <T extends ShapeCG> {
    shapes: T[] = [];

    addShape(shape: T): void {
        this.shapes.push(shape);
    }

    displayShapes(): void {
        this.shapes.forEach(shape => {
            console.log(`Shape: ${shape.name}`);
        });
    }
}

const circleCG = new CircleCG(5);
const squareCG = new SquareCG(4);

const containerCG = new ShapeContainerCG<ShapeCG>();
containerCG.addShape(circleCG);
containerCG.addShape(squareCG);
containerCG.displayShapes();