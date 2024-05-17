"use strict";
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
console.log("hello".capitalize());
Array.prototype.sum = function () {
    return this.reduce(function (acc, curr) { return acc + curr; }, 0);
};
console.log([1, 2, 3, 4].sum());
Date.prototype.getFormattedDate = function () {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return this.toLocaleDateString(undefined, options);
};
console.log(new Date().getFormattedDate());
Object.prototype.isEmpty = function () {
    return Object.keys(this).length === 0;
};
console.log({}.isEmpty());
console.log({ name: "John" }.isEmpty());
