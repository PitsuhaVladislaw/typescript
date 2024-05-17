/*
*/
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
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    Car.prototype.getInfo = function () {
        return "".concat(this.name, " - ").concat(this.price);
    };
    return Car;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(name, price) {
        return _super.call(this, name, price) || this;
    }
    Bus.prototype.test = function () {
        return this.getInfo();
    };
    return Bus;
}(Car));
var carFirst = new Car("BMW", 200000);
var carSecond = new Car("Mercedes", 350000);
console.log(carFirst.getInfo());
console.log(carSecond.getInfo());
//*Book
