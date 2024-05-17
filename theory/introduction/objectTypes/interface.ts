interface Person {
    name: string;
    age: number;
    email?: string; // Опциональное свойство
}


interface Point {
    readonly x: number;
    readonly y: number;
}

interface Employee extends Person {
    employeeId: number;
}

class Employee implements Person {
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}


interface User {
    name: string;
    age: number;
    email: string;
}

/*
const userDark: User = {
    name: "John",
    age: 25
};
*/


interface ShapeC {
    calculateArea(): number;
}

class RectangleC implements ShapeC {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class CircleC implements ShapeC {

    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
