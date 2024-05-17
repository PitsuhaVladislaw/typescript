"use strict";
var myCircle = { color: "red", radius: 10 };
console.log(myCircle);
var doc = {
    title: "My Document",
    print: function () {
        console.log("Printing...");
    },
    log: function () {
        console.log("Logging...");
    }
};
doc.print();
doc.log();
var myCircleEI = { color: "blue", radius: 5 };
console.log(myCircleEI);
var myDogEI = {
    name: "buddy",
    eat: function () {
        console.log("Eating...");
    },
    bark: function () {
        console.log("Woof woof");
    },
};
myDogEI.eat();
myDogEI.bark();
var myCircleEID = { color: "red", raduisObj: 10 };
var mySquareEID = { color: "blue", sideLength: 5 };
function drawShape(shape) {
    console.log("Drawing a shape with color ".concat(shape.color));
    if ("raduisObj" in shape) {
        console.log("Circle with radius ".concat(shape.raduisObj));
    }
    else if ("sideLength" in shape) {
        console.log("Square with side length ".concat(shape.sideLength));
    }
}
drawShape(myCircleEID);
drawShape(mySquareEID);
