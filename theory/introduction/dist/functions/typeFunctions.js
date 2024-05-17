"use strict";
function addF(a, b) {
    return a + b;
}
var results = addF(3, 5);
console.log(results);
function greetG(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greetG("Alice"));
console.log(greetG("Bob", "Hi"));
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log(multiply(4));
console.log(multiply(4, 3));
function calculate(operation, x, y) {
    return operation(x, y);
}
var sum = function (a, b) { return a + b; };
console.log(calculate(sum, 3, 5));
function displayInfo(name, age) {
    console.log("Name: ".concat(name, ", Age: ").concat(age));
}
displayInfo("John", 30);
function calculateFunc(operation, x, y) {
    return operation(x, y);
}
var sumFunc = function (a, b) { return a + b; };
var differenceFunc = function (a, b) { return a - b; };
console.log(calculate(sumFunc, 5, 19));
console.log(calculate(differenceFunc, 19, 5));
