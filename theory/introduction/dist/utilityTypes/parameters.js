"use strict";
function greet(name, age) {
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
}
var params1 = ['Alice', 30];
console.log(params1); // Выводит ['Alice', 30]
function calculateSumD(a, b) {
    return a + b;
}
var params2 = [5, 10];
var result1 = calculateSumD.apply(void 0, params2);
console.log(result1);
var multiplyPa = function (x, y) { return x * y; };
var params3 = [3, 4];
var result3 = multiplyPa.apply(void 0, params3);
console.log(result3);
function printMessagePa(message) {
    console.log(message);
}
var params4 = ['Hello, TypeScript!'];
printMessagePa.apply(void 0, params4);
function createPerson(name, age, city) {
    console.log("Creating a person: ".concat(name, ", ").concat(age, " years old, from ").concat(city));
}
var personData = ['Alice', 30, 'New York'];
createPerson.apply(void 0, personData);
