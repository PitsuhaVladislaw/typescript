"use strict";
var personV = {
    name: "Alice",
    age: 30
};
var point = {
    x: 10,
    y: 20
};
var dogDV = {
    type: "Mammal",
    breed: "Labrador"
};
var sayHelloDV = function (name) {
    console.log("Hello, ".concat(name, "!"));
};
sayHelloDV("Alice");
var colors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};
var CarV = /** @class */ (function () {
    function CarV(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    CarV.prototype.displayInfo = function () {
        console.log("Car: ".concat(this.year, " ").concat(this.brand, " ").concat(this.model));
    };
    return CarV;
}());
var newCar = new CarV("Toyota", "Corolla", 2021);
newCar.displayInfo();
