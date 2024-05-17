"use strict";
function sayHello() {
    console.log("Hello!");
}
function calculateSum(a, b) {
    var sum = a + b;
    console.log("Sum:", sum);
}
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.print = function (message) {
        console.log("Message:", message);
    };
    return Printer;
}());
function fetchData2(callback) {
    // Логика получения данных
    callback();
}
function logMessage(message) {
    console.log(message);
}
logMessage("Привет, мир!"); // Выводит "Привет, мир!" в консоль
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.logMessage = function (message) {
        console.log(message);
    };
    return Logger;
}());
var logger = new Logger();
logger.logMessage("Привет, мир!"); // Выводит "Привет, мир!" в консоль
function fetchData(callback) {
    // Логика получения данных
    callback();
}
function processData() {
    console.log("Данные обработаны");
}
fetchData(processData); // Выводит "Данные обработаны" в консоль
