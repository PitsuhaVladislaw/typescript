interface ShapeEI {
    color: string;
}

interface CircleEI extends ShapeEI {
    radius: number;
}

const myCircle: CircleEI = { color: "red", radius: 10 };
console.log(myCircle);


interface PrintableEI {
    print(): void;
}

interface LoggableEI {
    log(): void;
}

interface DocumentEI extends PrintableEI, LoggableEI {
    title: string;
}

const doc: DocumentEI = {
    title: "My Document",
    print() {
        console.log("Printing...");
    },
    log() {
        console.log("Logging...");
    }
};

doc.print();
doc.log();


interface ShapeEI {
    color: string;
}

interface CircleEI extends ShapeEI {
    radius: number;
}

const myCircleEI: CircleEI = { color: "blue", radius: 5 };
console.log(myCircleEI);


interface AnimalEI {
    name: string;
    eat(): void;
}

interface DogEI extends AnimalEI {
    bark(): void;
}


const myDogEI: DogEI = {
    name: "buddy",
    eat() {
        console.log("Eating...")
    },
    bark() {
        console.log("Woof woof")
    },
}

myDogEI.eat();
myDogEI.bark();



interface ShapeEID {
    color: string;
}

interface CircleEID extends ShapeEID {
    raduisObj?: number;
}

interface SquareEID extends CircleEID {
    sideLength: number;
}

const myCircleEID: CircleEID = { color: "red", raduisObj: 10 };
const mySquareEID: SquareEID = { color: "blue", sideLength: 5 };

function drawShape(shape: ShapeEID): void {
    console.log(`Drawing a shape with color ${shape.color}`);

    if("raduisObj" in shape) {
        console.log(`Circle with radius ${shape.raduisObj}`);
    } else if ("sideLength" in shape) {
        console.log(`Square with side length ${shape.sideLength}`);
    }
}

drawShape(myCircleEID);
drawShape(mySquareEID);