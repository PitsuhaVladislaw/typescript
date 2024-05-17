"use strict";
var valueExap = "Hello";
var lengthExap = valueExap.length;
var strValue = valueExap;
console.log(valueExap);
console.log(lengthExap);
console.log(strValue);
var dataNum = "123";
var stringValue = dataNum;
console.log(stringValue.toUpperCase());
var objEx = {
    name: "Persi",
    age: 24
};
var personObj = objEx;
console.log(personObj.name, personObj.age);
var valueArr = [1, "two", true];
var firstVal = valueArr[0];
console.log(firstVal);
function processValueEx(value) {
    if (typeof value === 'number') {
        var squareValue = Math.pow(value, 2);
        console.log("Square of ".concat(value, " is ").concat(squareValue));
    }
    else if (typeof value === 'string') {
        var lowerValue = value.toLowerCase();
        console.log("LowerCase value: " + lowerValue);
    }
    else {
        console.log("Unsupported value type");
    }
}
processValueEx(5);
processValueEx("What up, guys");
processValueEx(true);
