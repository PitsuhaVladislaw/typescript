namespace MyNamespace {
    export function farewell(): void {
        console.log("Goodbye!");
    }
}

namespace MyNamespace {
    export interface Employee extends Person {
        employeeId: number;
    }
}

let employeeD: MyNamespace.Employee = { name: "John", age: 30, employeeId: 12345 };

MyNamespace.greetD();
MyNamespace.farewell();




namespace MyNamespace {
    export function square(num: number): number {
        return num * num;
    }
}

namespace MyNamespace {
    export function cube(num: number): number {
        return num * num * num;
    }
}

console.log(MyNamespace.square(5));
console.log(MyNamespace.cube(3));



namespace MyNamespace {
    export type Color = "Red" | "Green" | "Blue";
}

namespace MyNamespace {
    export type Size = "Small" | "Medium" | "Large";
}

let color: MyNamespace.Color = "Red";
let size: MyNamespace.Size = "Medium";
namespace MyNamespace {
    export interface Shape {
        calculateArea(): number;
    }
}



namespace MyNamespace {
    export class Circle implements Shape {
        constructor(public radius: number) { }
        calculateArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }
}

/// <reference path="originalNamespace.ts" />
/// <reference path="extendingNamespace.ts" />
let circle = new MyNamespace.Circle(5);
console.log(circle.calculateArea());