class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const personDi = new Person("John", 25);
personDi.sayHello(); // Выводит "Hello, my name is John and I am 25 years old."


class Student extends Person {
    studentId: number;

    constructor(name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }

    study(): void {
        console.log(`${this.name} is studying.`);
    }
}

class Car {
    private brand: string;
    protected speed: number;

    constructor(brand: string) {
        this.brand = brand;
        this.speed = 0;
    }

    accelerate(): void {
        this.speed += 10;
    }

    getSpeed(): number {
        return this.speed;
    }
}


class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Animal is making a sound.");
    }
}

const animal = new Animal("Lion");
console.log(animal.name); // Выводит "Lion"
animal.makeSound(); // Выводит "Animal is making a sound."

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    bark(): void {
        console.log("Dog is barking.");
    }
}

const dog = new Dog("Buddy", "Labrador");
console.log(dog.name); // Выводит "Buddy"
console.log(dog.breed); // Выводит "Labrador"
dog.makeSound(); // Выводит "Animal is making a sound."
dog.bark(); // Выводит "Dog is barking."


class BankAccount { 
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if(amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance.");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());


class Shape {
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    getColor(): string {
        return this.color;
    }
}

class CircleS extends Shape {
    private raduis: number;

    constructor(color: string, raduis: number) {
        super(color);
        this.raduis = raduis;
    }

    getArea(): number {
        return Math.PI * this.raduis * this.raduis;
    }
}

class RectangleS extends Shape {
    private width: number;
    private height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const circleS = new CircleS("red", 5);
console.log(circleS.getColor());
console.log(circleS.getArea());

const rectangleS = new RectangleS("green", 23, 12);
console.log(rectangleS.getColor());
console.log(rectangleS.getArea());