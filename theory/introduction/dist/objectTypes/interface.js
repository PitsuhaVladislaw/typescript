"use strict";
var Employee = /** @class */ (function () {
    function Employee(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    return Employee;
}());
var RectangleC = /** @class */ (function () {
    function RectangleC(width, height) {
        this.width = width;
        this.height = height;
    }
    RectangleC.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return RectangleC;
}());
var CircleC = /** @class */ (function () {
    function CircleC(radius) {
        this.radius = radius;
    }
    CircleC.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return CircleC;
}());
