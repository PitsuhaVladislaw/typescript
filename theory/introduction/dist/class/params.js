"use strict";
var PersonCP = /** @class */ (function () {
    function PersonCP(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonCP.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return PersonCP;
}());
var person1 = new PersonCP("Alice", 30);
person1.displayInfo();
var CarCP = /** @class */ (function () {
    function CarCP(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    CarCP.prototype.displayCarInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model));
    };
    return CarCP;
}());
var myCarCP = new CarCP("Toyota", "Corolla");
myCarCP.displayCarInfo();
var ProductCP = /** @class */ (function () {
    function ProductCP(name, price) {
        if (price === void 0) { price = 0; }
        this.name = name;
        this.price = price;
    }
    ProductCP.prototype.displayProductInfo = function () {
        console.log("Product: ".concat(this.name, ", Price: ").concat(this.price));
    };
    return ProductCP;
}());
var product1 = new ProductCP("Laptop", 1000);
var product2 = new ProductCP("Phone");
product1.displayProductInfo();
product2.displayProductInfo();
var DogCP = /** @class */ (function () {
    function DogCP(name, breed) {
        this.name = name;
        this.name = name;
        this.breed = breed;
    }
    DogCP.prototype.displayDogInfo = function () {
        console.log("Name: ".concat(this.name, ", Breed: ").concat(this.breed));
    };
    return DogCP;
}());
var myDog = new DogCP("Buddy", "Labrador");
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
var EmployeeCP = /** @class */ (function () {
    function EmployeeCP(name, position, salary, department) {
        if (department === void 0) { department = "IT"; }
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.department = department;
    }
    EmployeeCP.prototype.displayEmployeeInfo = function () {
        console.log("Name: ".concat(this.name, ", Position: ").concat(this.position, ", Salary: ").concat(this.salary, ", Department: ").concat(this.department));
    };
    return EmployeeCP;
}());
var employee1 = new EmployeeCP("John", "Developer", 5000);
var employee2 = new EmployeeCP("Alice", "Manager", 7000, "HR");
employee1.displayEmployeeInfo();
employee2.displayEmployeeInfo();
