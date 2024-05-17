interface Empolyee {
    name: string;
    employeeId: number;
}

interface Department {
    departmentName: string;
    manager: string;
}


type EmpolyeeDepartment = Empolyee & Department;

let employeeDepartment: EmpolyeeDepartment = {
    name: "Alice",
    employeeId: 12345,
    departmentName: "HR",
    manager: "Bob"
}

console.log(employeeDepartment);


interface Printable {
    print: () => void;
}

interface Loggable {
    log: () => void;
}

function printAndLog(item: Printable & Loggable) {
    item.print();
    item.log();
}

let objV = {
    print: () => console.log("Printing..."),
    log: () => console.log("Logging...")
};

printAndLog(objV);


type NumberOrString = number & string;

let valueV: NumberOrString;
//valueV = 10;
//valueV = "Hello";


/*
interface Shape {
    getArea: () => number;
}

interface Color {
    color: string;
}

type ColoredShape = Shape & Color;

let coloredShape: ColoredShape = {
    getArea(): () => 100,
    color: "red"
};

console.log(coloredShape);


type NumberArray = number[];
type StringArray = string[];

type CombinedArray = NumberArray & StringArray;

let combinedArray: CombinedArray;
combinedArray = [1, 2, 3, "four", "five"];

console.log(combinedArray);
*/



interface Animal {
    name: string;
    eat: () => void;
}

interface Flyable {
    fly: () => void;
}

type Bird = Animal & Flyable;

class Sparrow implements Bird {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    fly() {
        console.log(`${this.name} is flying.`);
    }

    makeSound(): void {
        console.log(`${this.name} is chirping.`);
    }
}

let sparrow = new Sparrow("Sparrow");
sparrow.eat();
sparrow.fly();
sparrow.makeSound()