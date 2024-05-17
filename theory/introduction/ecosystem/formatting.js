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
function greetDD(name) {
    if (name === 'Alice') {
        console.log('Hello, Alice!');
    }
    else {
        console.log('Hello, ' + name + '!');
    }
}
greetDD('Alice');
greetDD("David");
greetDD('Jack');
var xD = 10;
var yD = 20;
if (xD < yD) {
    console.log('x is less than y');
}
else {
    console.log('x is greater than or equal to y');
}
console.log(yD, xD);
function addNumbers(a, b) {
    return a + b;
}
addNumbers(10, 29);
var personFD = {
    name: 'John',
    age: 30
};
console.log(personFD);
var AnimalFO = /** @class */ (function () {
    function AnimalFO(name) {
        this.name = name;
    }
    AnimalFO.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound."));
    };
    return AnimalFO;
}());
var DogFO = /** @class */ (function (_super) {
    __extends(DogFO, _super);
    function DogFO(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    DogFO.prototype.speak = function () {
        console.log("".concat(this.name, " barks"));
    };
    return DogFO;
}(AnimalFO));
var dog1 = new DogFO('Buddy', 'Labrador');
dog1.speak();
