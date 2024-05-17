"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.start = function () {
        console.log("Starting the ".concat(this.brand, " car."));
    };
    return Car;
}());
exports.Car = Car;
