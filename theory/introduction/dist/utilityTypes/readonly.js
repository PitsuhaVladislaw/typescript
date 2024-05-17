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
var PersonRR = /** @class */ (function () {
    function PersonRR(name) {
        this.name = name;
    }
    return PersonRR;
}());
var personRR = new PersonRR("Alice");
var pointRR = { x: 10, y: 20 };
//pointRR.x = 15;
var CircleRR = /** @class */ (function () {
    function CircleRR(raduisR) {
        this.PI = 3.14;
        this.raduisR = raduisR;
    }
    CircleRR.prototype.getArea = function () {
        return this.PI * this.raduisR * this.raduisR;
    };
    return CircleRR;
}());
var readonlyArray = [1, 2, 3, 4];
//readonlyArray.push(5);
function printMessage(message) {
    //message.push("Hello"); // Ошибка: Нельзя изменять параметр только для чтения
}
printMessage(["Hi", "Hola"]);
var AnimalRR = /** @class */ (function () {
    function AnimalRR(species) {
        this.species = species;
    }
    return AnimalRR;
}());
var DogRR = /** @class */ (function (_super) {
    __extends(DogRR, _super);
    function DogRR() {
        return _super.call(this, "DogRR") || this;
    }
    DogRR.prototype.displaySpecies = function () {
        console.log("Species: ".concat(this.species));
    };
    return DogRR;
}(AnimalRR));
var dogRR = new DogRR();
//dogRR.species = "Cat";
dogRR.displaySpecies();
var PersonRRD = /** @class */ (function () {
    function PersonRRD(id) {
        this.id = id;
    }
    PersonRRD.prototype.getId = function () {
        return this.id;
    };
    return PersonRRD;
}());
var personRRD = new PersonRRD(1);
//personRRD.id = 2;
console.log(personRRD.getId());
var ProductRR = /** @class */ (function () {
    function ProductRR(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    ProductRR.prototype.displayInfo = function () {
        console.log("Product ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: ").concat(this.price));
    };
    return ProductRR;
}());
var productRRR = new ProductRR(1, "Phone", 500);
//product.price = 600;
productRRR.displayInfo();
