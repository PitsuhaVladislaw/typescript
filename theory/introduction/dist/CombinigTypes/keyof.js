"use strict";
var key = 'name';
console.log(key);
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: 'Alice', age: 30 };
var nameN = getProperty(person, 'name');
var ageN = getProperty(person, 'age');
function hasKey(obj, key) {
    return key in obj;
}
var userV = { id: 1, name: 'Alice' };
if (hasKey(userV, 'name')) {
    console.log('User has name property');
}
else {
    console.log('User does not have name property');
}
/*
interface Shape {
    type: string;
    color: string;
}

type ShapeKeys = keyof Shape;

let shape: Shape = { type: 'circle', color: 'red' };
let colorKey: ShapeKeys = 'color';
console.log(shape[colorKey]); // Выводит 'red'
*/
var CarВ = /** @class */ (function () {
    function CarВ(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    CarВ.prototype.getDetails = function (key) {
        return this[key];
    };
    return CarВ;
}());
var carB = new CarВ('Toyota', 'Camry');
console.log(carB.getDetails('brand'));
function displayStudentInfo(student) {
    var keys = Object.keys(student);
    keys.forEach(function (key) {
        console.log("".concat(key, ": ").concat(student[key]));
    });
}
var studentB = { id: 1, name: 'Alice', age: 20 };
displayStudentInfo(studentB);
function displayProductInfo(product, key) {
    console.log("".concat(key, ": ").concat(product[key]));
}
var productD = { id: 1, name: "Laptop", price: 1000 };
displayProductInfo(productD, "name");
function hasKeyF(obj, key) {
    return key in obj;
}
var book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };
console.log(hasKeyF(book, "title"));
console.log(hasKeyF(book, "author"));
