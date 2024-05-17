"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.message = void 0;
exports.message = "Hello, World";
//import { message } from "./module1";
console.log(exports.message);
var car_1 = require("./global/car");
var myCar = new car_1.Car("Toyota");
myCar.start();
var API_URL = "https://api.example.com";
function fetchData(endpoint) {
    return fetch("".concat(API_URL, "/").concat(endpoint))
        .then(function (response) { return response.json(); });
}
exports.fetchData = fetchData;
fetchData("users")
    .then(function (data) { return console.log(data); })
    .catch(function (error) { return console.error(error); });
var variable;
variable = 10;
console.log(variable);
variable = "Hello";
console.log(variable);
variable = true;
console.log(variable);
var array = [1, "two", true];
console.log(array);
function processInput(input) {
    if (typeof input === 'number') {
        console.log("Received number: ".concat(input));
    }
    else if (typeof input === 'string') {
        console.log("Received string: ".concat(input));
    }
    else {
        console.log("Received data of type: ".concat(typeof input));
    }
}
processInput(42);
processInput("Hello");
processInput(true);
