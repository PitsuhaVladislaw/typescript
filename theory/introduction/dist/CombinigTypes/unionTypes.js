"use strict";
var result;
result = 10;
console.log(result);
result = 'hello';
console.log(result);
function printId(id) {
    console.log("ID: ".concat(id));
}
printId(100);
printId("abc");
var myCar = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(myCar);
function displayyValue(value) {
    if (typeof value === "number") {
        console.log("Value is a number: ".concat(value));
    }
    else {
        console.log("Value is a string: ".concat(value));
    }
}
displayyValue(25);
displayyValue("abc");
var itemss = [1, "two", 3, "four"];
console.log(itemss);
function processResult(result) {
    if (typeof result === 'number') {
        console.log("Result is a number: ".concat(result));
    }
    else {
        console.log("Result is a string: ".concat(result));
    }
}
processResult(123);
processResult("Success");
