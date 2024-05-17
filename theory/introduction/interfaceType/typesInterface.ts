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



interface PersonSD {
    name: string;
    age: number;
}

type Employees = PersonSD & {employeeId: number}

function displayPersonInfoD(person: PersonSD): void {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}

function displayEmployeeInfoD(employee: Employees): void {
    console.log(`Name: ${employee.name}, Age: ${employee.age}, Employee ID: ${employee.employeeId}`);
}

let personJ: PersonSD = { name: "John", age: 25 }
let employeeJ: Employees = { name: "Alice", age: 30, employeeId: 12345 }

displayPersonInfoD(personJ);
displayEmployeeInfoD(employeeJ);