"use strict";
/*
type Age = number;
let userAge: Age = 30;


interface Person {
    name: string;
    age: number;
}

let person: Person = { name: "Alice", age: 25 };


type Status = "active" | "inactive";
let userStatus: Status = "active";


interface Shape {
    calculateArea(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}


type User = {
    name: string;
    age: number;
};

type Admin = User & { role: string };

let admin: Admin = { name: "Alice", age: 30, role: "Admin" };
*/
function displayPersonInfoD(person) {
    console.log("Name: ".concat(person.name, ", Age: ").concat(person.age));
}
function displayEmployeeInfoD(employee) {
    console.log("Name: ".concat(employee.name, ", Age: ").concat(employee.age, ", Employee ID: ").concat(employee.employeeId));
}
var personJ = { name: "John", age: 25 };
var employeeJ = { name: "Alice", age: 30, employeeId: 12345 };
displayPersonInfoD(personJ);
displayEmployeeInfoD(employeeJ);
