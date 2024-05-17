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
var AnimalD = /** @class */ (function () {
    function AnimalD() {
    }
    return AnimalD;
}());
var DogD = /** @class */ (function (_super) {
    __extends(DogD, _super);
    function DogD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DogD;
}(AnimalD));
var dogD = new DogD();
console.log(dogD instanceof DogD);
console.log(dogD instanceof AnimalD);
var strExp = "Hello";
console.log(strExp instanceof String);
console.log(strExp instanceof Object);
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var CarF = /** @class */ (function (_super) {
    __extends(CarF, _super);
    function CarF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarF;
}(Vehicle));
var car = new CarF();
console.log(car instanceof Vehicle);
var PersonD = /** @class */ (function () {
    function PersonD() {
    }
    return PersonD;
}());
var personD = new PersonD();
console.log(personD instanceof PersonD);
var ShapeD = /** @class */ (function () {
    function ShapeD() {
    }
    return ShapeD;
}());
var CircleD = /** @class */ (function (_super) {
    __extends(CircleD, _super);
    function CircleD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CircleD;
}(ShapeD));
var CylinderD = /** @class */ (function (_super) {
    __extends(CylinderD, _super);
    function CylinderD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CylinderD;
}(CircleD));
var cylinder = new CylinderD();
console.log(cylinder instanceof CylinderD);
console.log(cylinder instanceof CircleD);
console.log(cylinder instanceof ShapeD);
var AnimalB = /** @class */ (function () {
    function AnimalB() {
    }
    AnimalB.prototype.speak = function () {
        console.log("Animal speaks");
    };
    return AnimalB;
}());
var DogB = /** @class */ (function (_super) {
    __extends(DogB, _super);
    function DogB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogB.prototype.speak = function () {
        console.log("Dog barks");
    };
    return DogB;
}(AnimalB));
var CatB = /** @class */ (function (_super) {
    __extends(CatB, _super);
    function CatB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CatB.prototype.speak = function () {
        console.log("Cat meows");
    };
    return CatB;
}(AnimalB));
var dogB = new DogB();
var catB = new CatB();
function makeAnimalSpeak(animal) {
    if (animal instanceof DogB) {
        console.log("It's a dog");
        animal.speak();
    }
    else if (animal instanceof CatB) {
        console.log("It's a cat");
        animal.speak();
    }
    else {
        console.log("Unknown animal");
    }
}
makeAnimalSpeak(dogB);
makeAnimalSpeak(catB);
