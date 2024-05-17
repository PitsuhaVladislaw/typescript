class PersonCP {
    constructor(public name: string, public age: number) {

    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person1 = new PersonCP("Alice", 30);
person1.displayInfo();


class CarCP {
    constructor(private brand: string, public model: string) {
        
    }

    displayCarInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
}

const myCarCP = new CarCP("Toyota", "Corolla");
myCarCP.displayCarInfo();


class ProductCP {
    constructor(public name: string, public price: number = 0) {
        
    }

    displayProductInfo(): void {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}

const product1 = new ProductCP("Laptop", 1000);
const product2 = new ProductCP("Phone");
product1.displayProductInfo();
product2.displayProductInfo();


class DogCP {
    private breed: string;

    constructor(public name: string, breed: string) {
        this.name = name;
        this.breed = breed;
    }

    displayDogInfo(): void {
        console.log(`Name: ${this.name}, Breed: ${this.breed}`);
    }
}

const myDog = new DogCP("Buddy", "Labrador");
myDog.displayDogInfo();

/*
class Point {
    constructor(public x: number, public y: number, public color: string) {
        
    }

    displayPoint(): void {
        console.log(`Point: (${this.x}, ${this.y}), Color: ${this.color}`);
    }
}

const point1 = new Point(10, 20, "red");
point1.displayPoint(); // Выводит "Point: (10, 20), Color: red"
*/



class EmployeeCP {
    constructor(
        public name: string,
        public position: string,
        public salary: number,
        public department: string = "IT"
    ) {}

    displayEmployeeInfo(): void {
        console.log(`Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}, Department: ${this.department}`);
    }
}

const employee1 = new EmployeeCP("John", "Developer", 5000);
const employee2 = new EmployeeCP("Alice", "Manager", 7000, "HR");

employee1.displayEmployeeInfo();
employee2.displayEmployeeInfo();