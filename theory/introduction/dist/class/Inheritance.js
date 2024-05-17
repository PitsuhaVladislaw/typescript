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
var AnimalI = /** @class */ (function () {
    function AnimalI(name) {
        this.name = name;
    }
    AnimalI.prototype.makeSound = function () {
        console.log("".concat(this.name, " make sound"));
    };
    return AnimalI;
}());
var DogI = /** @class */ (function (_super) {
    __extends(DogI, _super);
    function DogI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogI.prototype.makeSound = function () {
        console.log("Dog barks");
    };
    return DogI;
}(AnimalI));
var dogI = new DogI("Buddy");
dogI.makeSound();
var AnimalI2 = /** @class */ (function () {
    function AnimalI2() {
    }
    AnimalI2.prototype.makeSound = function () {
        console.log("Animal makes a sound");
    };
    return AnimalI2;
}());
var DogI2 = /** @class */ (function (_super) {
    __extends(DogI2, _super);
    function DogI2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogI2.prototype.makeSound = function () {
        console.log("Dog barks");
    };
    return DogI2;
}(AnimalI2));
var CatI2 = /** @class */ (function (_super) {
    __extends(CatI2, _super);
    function CatI2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CatI2.prototype.makeSound = function () {
        console.log("Cat meows");
    };
    return CatI2;
}(AnimalI2));
function makeAnimalsound(animal) {
    animal.makeSound();
}
var dog2 = new DogI2();
var cat2 = new CatI2();
makeAnimalsound(dog2);
makeAnimalsound(cat2);
var ShapeI = /** @class */ (function () {
    function ShapeI() {
    }
    return ShapeI;
}());
var CircleI = /** @class */ (function (_super) {
    __extends(CircleI, _super);
    function CircleI(raduis) {
        var _this = _super.call(this) || this;
        _this.raduis = raduis;
        return _this;
    }
    CircleI.prototype.calculateArea = function () {
        return this.raduis * this.raduis;
    };
    return CircleI;
}(ShapeI));
var RectangleI = /** @class */ (function (_super) {
    __extends(RectangleI, _super);
    function RectangleI(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    RectangleI.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return RectangleI;
}(ShapeI));
var circleI = new CircleI(5);
var rectangle = new RectangleI(3, 5);
console.log(circleI.calculateArea());
console.log(rectangle.calculateArea());
var Circlell = /** @class */ (function () {
    function Circlell(raduis) {
        this.raduis = raduis;
    }
    Circlell.prototype.calculateArea = function () {
        return Math.PI * this.raduis * this.raduis;
    };
    return Circlell;
}());
var Rectanglell = /** @class */ (function () {
    function Rectanglell(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectanglell.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectanglell;
}());
function calculateTotalArea(shapes) {
    var totalArea = 0;
    shapes.forEach(function (shape) {
        totalArea += shape.calculateArea();
    });
    return totalArea;
}
var circlell = new Circlell(4);
var rectanglell = new Rectanglell(4, 5);
var totalArea = calculateTotalArea([circleI, rectangle]);
console.log(totalArea);
