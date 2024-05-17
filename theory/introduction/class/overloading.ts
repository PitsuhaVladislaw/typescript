/*
class PersonCO {
    constructor(public name: string, public age: number) {}

    constructor(public name: string) {
        this.name = name;
        this.age = 0;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person1 = new PersonCO("Alice", 30);
const person2 = new PersonCO("Bob");
person1.displayInfo();
person2.displayInfo();


class ProductCO {
    constructor(public name: string, public price: number) {}

    constructor(public name: string, public description: string) {}

    displayInfo(): void {
        console.log(`Name: ${this.name}`);
    }
}

const product1 = new ProductCO("Laptop", 1000);
const product2 = new ProductCO("Phone", "Smartphone");
product1.displayInfo();
product2.displayInfo();


class BookCO {
    constructor(public title: string, public author: string) {}

    constructor(public title: string, public author: string, public pages: number = 0) {}

    displayBookInfo(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
}

const book1 = new BookCO("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new BookCO("To Kill a Mockingbird", "Harper Lee", 281);
book1.displayBookInfo();
book2.displayBookInfo();


class AnimalCO {
    constructor(public name: string) {}

    constructor(private name: string, public age: number) {}

    displayAnimalInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const animal1 = new AnimalCO("Lion");
const animal2 = new AnimalCO("Tiger", 5);
animal1.displayAnimalInfo();
animal2.displayAnimalInfo();


class ShapeCO {
    constructor(public name: string) {}

    constructor(public sides: number) {}

    displayInfo(): void {
        if (typeof this.name === 'string') {
        console.log(`Shape: ${this.name}`);
        } else {
        console.log(`Number of Sides: ${this.sides}`);
        }
    }
}

const shape1 = new ShapeCO("Circle");
const shape2 = new ShapeCO(4);
shape1.displayInfo();
shape2.displayInfo();
*/