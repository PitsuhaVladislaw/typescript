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
var PersonIn = /** @class */ (function () {
    function PersonIn(name, age) {
        this.name = name;
        this.age = age;
    }
    return PersonIn;
}());
var personIn = new PersonIn("Alice", 23);
console.log(personIn.name);
var CarIn = /** @class */ (function () {
    function CarIn(brand) {
        this.brand = brand;
    }
    return CarIn;
}());
var carIn = new CarIn("Toyota");
console.log(carIn.brand);
var ProductIn = /** @class */ (function () {
    function ProductIn(name, price) {
        this.name = name;
        this.price = price;
    }
    return ProductIn;
}());
var productIn = new ProductIn("Laptop", 1000);
console.log(productIn.name);
console.log(productIn.price);
var PointIn = /** @class */ (function () {
    function PointIn(x, y) {
        this.x = x;
        this.y = y;
    }
    return PointIn;
}());
var pointIn = new PointIn(5, 10);
console.log(pointIn.x);
var AnimalIn = /** @class */ (function () {
    function AnimalIn(species) {
        this.species = species;
    }
    return AnimalIn;
}());
var DogIn = /** @class */ (function (_super) {
    __extends(DogIn, _super);
    function DogIn(species, breed) {
        var _this = _super.call(this, species) || this;
        _this.breed = breed;
        return _this;
    }
    return DogIn;
}(AnimalIn));
var dogIn = new DogIn("Dog", "Labrador");
console.log(dogIn.species);
console.log(dogIn.breed);
