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
var AnimalM = /** @class */ (function () {
    function AnimalM() {
    }
    AnimalM.prototype.makeSound = function () {
        console.log("Animal is making a sound");
    };
    return AnimalM;
}());
var DogM = /** @class */ (function (_super) {
    __extends(DogM, _super);
    function DogM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogM.prototype.makeSound = function () {
        console.log("Dog is barking");
    };
    return DogM;
}(AnimalM));
var dogM = new DogM();
dogM.makeSound();
var AnimalM2 = /** @class */ (function () {
    function AnimalM2() {
    }
    AnimalM2.prototype.makeSound = function () {
        console.log("Animal is making a sound");
    };
    return AnimalM2;
}());
var DogM2 = /** @class */ (function (_super) {
    __extends(DogM2, _super);
    function DogM2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogM2.prototype.makeSound = function () {
        _super.prototype.makeSound.call(this);
        console.log("Dog is barking");
    };
    return DogM2;
}(AnimalM2));
var dogM2 = new DogM2();
dogM2.makeSound();
/*
class ShapeM {
    calculateArea(): void {
        console.log("Calculating area of shape");
    }
}

class CircleM extends ShapeM {
    calculateArea(raduis: number): void {
        const area = Math.PI * raduis * raduis;
        console.log(`Area of circle with raduis ${raduis} is ${area}`);
    }
}

const circle = new CircleM();
circle.calculateArea(5);
*/
var PersonM = /** @class */ (function () {
    function PersonM() {
    }
    PersonM.prototype.introduce = function () {
        return "I am a person";
    };
    return PersonM;
}());
var StudentM = /** @class */ (function (_super) {
    __extends(StudentM, _super);
    function StudentM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StudentM.prototype.introduce = function () {
        return "I am a student";
    };
    return StudentM;
}(PersonM));
var student = new StudentM();
console.log(student.introduce());
var AnimalML = /** @class */ (function () {
    function AnimalML() {
    }
    AnimalML.prototype.makeSound = function () {
        console.log("Animal makes a sound");
    };
    return AnimalML;
}());
var DogML = /** @class */ (function (_super) {
    __extends(DogML, _super);
    function DogML() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogML.prototype.makeSound = function () {
        console.log("Dog barks");
    };
    return DogML;
}(AnimalML));
var CatML = /** @class */ (function (_super) {
    __extends(CatML, _super);
    function CatML() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CatML.prototype.makeSound = function () {
        console.log("Cat meows");
    };
    return CatML;
}(AnimalML));
var dogML = new DogML();
var catML = new CatML();
dogML.makeSound();
catML.makeSound();
