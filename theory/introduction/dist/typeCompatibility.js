"use strict";
var numB = 5;
var anyNum = numB;
var str = "hello";
var anyStr = str;
var numOrStr = 10;
numOrStr = "Hello";
var shape = { color: "red" };
var fn1 = function (x) { return console.log(x); };
var fn2 = function (y, z) { return console.log(y + z); };
fn2 = fn1; // Контравариантность
var CatC = /** @class */ (function () {
    function CatC(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    return CatC;
}());
var DogC = /** @class */ (function () {
    function DogC(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    return DogC;
}());
var dogc = new DogC("Buddy", "Labrador");
var catc = new CatC("Whiskers", "Gray");
var animalC;
