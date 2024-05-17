"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function display(value) {
    if (typeof value === 'string') {
        console.log("String value: ".concat(value));
    }
    else {
        console.log("Number value: ".concat(value));
    }
}
display("Hello");
display(123);
function getMax(a, b, c) {
    if (c) {
        return Math.max(a, b, c);
    }
    else {
        return Math.max(a, b);
    }
}
var max1 = getMax(5, 10);
var max2 = getMax(3, 8, 4);
function processArray(arr) {
    return arr.map(function (item) { return item; });
}
var arr1 = processArray([1, 2, 3]);
var arr2 = processArray(["a", "b", "c"]);
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var merged1 = mergeObjects({ a: 1 }, { b: 2 });
var merged2 = mergeObjects({ a: "Hello" }, { b: "World" });
function displayData(data) {
    console.log(data);
}
displayData(10);
displayData("Hello");
function formatData(data) {
    if (typeof data === 'number') {
        return "Number: " + data;
    }
    else {
        return "String: " + data;
    }
}
var formattedNumber = formatData(10);
var formattedString = formatData("Hello");
