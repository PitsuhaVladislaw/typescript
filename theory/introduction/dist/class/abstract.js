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
var AnimalAB = /** @class */ (function () {
    function AnimalAB() {
    }
    AnimalAB.prototype.move = function () {
        console.log("Roaming the earth...");
    };
    return AnimalAB;
}());
var DogAB = /** @class */ (function (_super) {
    __extends(DogAB, _super);
    function DogAB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogAB.prototype.makeSound = function () {
        console.log("WOOF, WOOF");
    };
    return DogAB;
}(AnimalAB));
var myDogAB = new DogAB();
myDogAB.move();
myDogAB.makeSound();
var ShapeAB = /** @class */ (function () {
    function ShapeAB() {
    }
    ShapeAB.prototype.display = function () {
        console.log("Calculating area...");
    };
    return ShapeAB;
}());
var CircleAB = /** @class */ (function (_super) {
    __extends(CircleAB, _super);
    function CircleAB(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    CircleAB.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return CircleAB;
}(ShapeAB));
var circleAB = new CircleAB(5);
console.log(circleAB.calculateArea());
circleAB.display();
var VehicleAB = /** @class */ (function () {
    function VehicleAB(brand) {
        this.brand = brand;
    }
    VehicleAB.prototype.displayInfo = function () {
        console.log("Brand: ".concat(this.brand));
    };
    return VehicleAB;
}());
var CarAB = /** @class */ (function (_super) {
    __extends(CarAB, _super);
    function CarAB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarAB.prototype.drive = function () {
        console.log("Driving the car...");
    };
    return CarAB;
}(VehicleAB));
var carAB = new CarAB("Toyota");
carAB.displayInfo();
carAB.drive();
var ShapeAV = /** @class */ (function () {
    function ShapeAV() {
    }
    ShapeAV.prototype.display = function () {
        console.log("Calculating area....");
    };
    return ShapeAV;
}());
var RectangleAV = /** @class */ (function (_super) {
    __extends(RectangleAV, _super);
    function RectangleAV(width, heigh) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.heigh = heigh;
        return _this;
    }
    RectangleAV.prototype.calculateArea = function () {
        return this.width * this.heigh;
    };
    return RectangleAV;
}(ShapeAV));
var CircleAV = /** @class */ (function (_super) {
    __extends(CircleAV, _super);
    function CircleAV(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    CircleAV.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return CircleAV;
}(ShapeAV));
var rectangleAV = new RectangleAV(4, 6);
console.log(rectangleAV.calculateArea());
rectangleAV.display();
var circleAV = new CircleAV(5);
console.log(circleAV.calculateArea());
circleAV.display();
