"use strict";
var MyNamespace;
(function (MyNamespace) {
    function farewell() {
        console.log("Goodbye!");
    }
    MyNamespace.farewell = farewell;
})(MyNamespace || (MyNamespace = {}));
var employeeD = { name: "John", age: 30, employeeId: 12345 };
MyNamespace.greetD();
MyNamespace.farewell();
(function (MyNamespace) {
    function square(num) {
        return num * num;
    }
    MyNamespace.square = square;
})(MyNamespace || (MyNamespace = {}));
(function (MyNamespace) {
    function cube(num) {
        return num * num * num;
    }
    MyNamespace.cube = cube;
})(MyNamespace || (MyNamespace = {}));
console.log(MyNamespace.square(5));
console.log(MyNamespace.cube(3));
var color = "Red";
var size = "Medium";
(function (MyNamespace) {
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        Circle.prototype.calculateArea = function () {
            return Math.PI * this.radius * this.radius;
        };
        return Circle;
    }());
    MyNamespace.Circle = Circle;
})(MyNamespace || (MyNamespace = {}));
/// <reference path="originalNamespace.ts" />
/// <reference path="extendingNamespace.ts" />
var circle = new MyNamespace.Circle(5);
console.log(circle.calculateArea());
