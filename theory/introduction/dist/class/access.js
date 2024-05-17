"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonA = /** @class */ (function () {
    function PersonA(name) {
        this.name = name;
    }
    PersonA.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name));
    };
    return PersonA;
}());
var personA = new PersonA("Alice");
console.log(personA.name);
personA.displayInfo();
var BankAccountA = /** @class */ (function () {
    function BankAccountA(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccountA.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccountA.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    return BankAccountA;
}());
var accountA = new BankAccountA(1000);
console.log(accountA);
console.log(accountA.getBalance());
accountA.deposit(500);
console.log(accountA.getBalance());
var AnimalA = /** @class */ (function () {
    function AnimalA(age) {
        this.age = age;
    }
    AnimalA.prototype.getAge = function () {
        return this.age;
    };
    return AnimalA;
}());
var DogA = /** @class */ (function (_super) {
    __extends(DogA, _super);
    function DogA(age, breed) {
        var _this = _super.call(this, age) || this;
        _this.breed = breed;
        return _this;
    }
    DogA.prototype.displayInfo = function () {
        console.log("Age: ".concat(this.getAge(), ", Breed: ").concat(this.breed));
    };
    return DogA;
}(AnimalA));
var dogA = new DogA(5, "Labrador");
dogA.displayInfo();
var CounterA = /** @class */ (function () {
    function CounterA() {
        this.count = 0;
    }
    CounterA.prototype.increment = function () {
        this.count++;
    };
    CounterA.prototype.getCount = function () {
        this.increment();
        return this.count;
    };
    return CounterA;
}());
var counterA = new CounterA();
console.log(counterA.getCount());
var EmployeeA = /** @class */ (function () {
    function EmployeeA(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    EmployeeA.prototype.dispalyInfo = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Department: ").concat(this.department));
    };
    return EmployeeA;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, department, teamSize) {
        var _this = _super.call(this, id, name, department) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.dispalyManagerInfo = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Department: ").concat(this.department, ", Team Size: ").concat(this.teamSize));
    };
    return Manager;
}(EmployeeA));
var employeeA = new EmployeeA(1, "Alice", "HR");
employeeA.dispalyInfo();
var manager = new Manager(2, "Bob", "IT", 120);
manager.dispalyManagerInfo();
