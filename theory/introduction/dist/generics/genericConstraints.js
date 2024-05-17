"use strict";
function logLength(arg) {
    console.log(arg.length);
}
logLength("hello");
logLength([1, 2, 3]);
var AnimalCG = /** @class */ (function () {
    function AnimalCG(name) {
        this.name = name;
    }
    return AnimalCG;
}());
var ZooCG = /** @class */ (function () {
    function ZooCG() {
        this.animals = [];
    }
    ZooCG.prototype.addAnimal = function (animal) {
        this.animals.push(animal);
    };
    return ZooCG;
}());
var zoo = new ZooCG();
var lion = new AnimalCG('lion');
zoo.addAnimal(lion);
function printItem(item) {
    item.printD();
}
var BookCG = /** @class */ (function () {
    function BookCG() {
    }
    BookCG.prototype.printD = function () {
        console.log("Printing book...");
    };
    return BookCG;
}());
var bookCG = new BookCG();
printItem(bookCG);
function sumCG(a, b) {
    return a + b;
}
console.log(sumCG(10, 20));
function getPropertyCG(obj, key) {
    return obj[key];
}
var personCG = { name: 'Alice', age: 20 };
console.log(getPropertyCG(personCG, "name"));
console.log(getPropertyCG(personCG, "age"));
var VehicleCG = /** @class */ (function () {
    function VehicleCG() {
    }
    VehicleCG.prototype.drive = function () {
        console.log("Driving vehicle...");
    };
    return VehicleCG;
}());
function startVehicle(vehicle) {
    vehicle.drive();
}
var carCG = new VehicleCG();
startVehicle(carCG);
function getFirstElementCG(arr) {
    return arr[0];
}
console.log(getFirstElementCG([1, 2, 3]));
var CircleCG = /** @class */ (function () {
    function CircleCG(raduis) {
        this.name = "Circle";
        this.raduis = raduis;
    }
    return CircleCG;
}());
var SquareCG = /** @class */ (function () {
    function SquareCG(sideLength) {
        this.name = "Square";
        this.sideLength = sideLength;
    }
    return SquareCG;
}());
var ShapeContainerCG = /** @class */ (function () {
    function ShapeContainerCG() {
        this.shapes = [];
    }
    ShapeContainerCG.prototype.addShape = function (shape) {
        this.shapes.push(shape);
    };
    ShapeContainerCG.prototype.displayShapes = function () {
        this.shapes.forEach(function (shape) {
            console.log("Shape: ".concat(shape.name));
        });
    };
    return ShapeContainerCG;
}());
var circleCG = new CircleCG(5);
var squareCG = new SquareCG(4);
var containerCG = new ShapeContainerCG();
containerCG.addShape(circleCG);
containerCG.addShape(squareCG);
containerCG.displayShapes();
