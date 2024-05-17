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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var personDi = new Person("John", 25);
personDi.sayHello(); // Выводит "Hello, my name is John and I am 25 years old."
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.study = function () {
        console.log("".concat(this.name, " is studying."));
    };
    return Student;
}(Person));
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
        this.speed = 0;
    }
    Car.prototype.accelerate = function () {
        this.speed += 10;
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    return Car;
}());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Animal is making a sound.");
    };
    return Animal;
}());
var animal = new Animal("Lion");
console.log(animal.name); // Выводит "Lion"
animal.makeSound(); // Выводит "Animal is making a sound."
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log("Dog is barking.");
    };
    return Dog;
}(Animal));
var dog = new Dog("Buddy", "Labrador");
console.log(dog.name); // Выводит "Buddy"
console.log(dog.breed); // Выводит "Labrador"
dog.makeSound(); // Выводит "Animal is making a sound."
dog.bark(); // Выводит "Dog is barking."
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient balance.");
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    return Shape;
}());
var CircleS = /** @class */ (function (_super) {
    __extends(CircleS, _super);
    function CircleS(color, raduis) {
        var _this = _super.call(this, color) || this;
        _this.raduis = raduis;
        return _this;
    }
    CircleS.prototype.getArea = function () {
        return Math.PI * this.raduis * this.raduis;
    };
    return CircleS;
}(Shape));
var RectangleS = /** @class */ (function (_super) {
    __extends(RectangleS, _super);
    function RectangleS(color, width, height) {
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    RectangleS.prototype.getArea = function () {
        return this.width * this.height;
    };
    return RectangleS;
}(Shape));
var circleS = new CircleS("red", 5);
console.log(circleS.getColor());
console.log(circleS.getArea());
var rectangleS = new RectangleS("green", 23, 12);
console.log(rectangleS.getColor());
console.log(rectangleS.getArea());
