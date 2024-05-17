"use strict";
var valueN = 19;
if (valueN) {
    console.log(true);
}
else {
    console.log(false);
}
var valueZ = 0;
if (valueZ) {
    console.log("Значение истинно.");
}
else {
    console.log("Значение ложно.");
}
var text = '';
if (text) {
    console.log("Строка не пустая.");
}
else {
    console.log("Строка пустая.");
}
var isValid = false;
if (isValid) {
    console.log("Значение истинно.");
}
else {
    console.log("Значение ложно.");
}
/*
let valueNum: number;

if (valueNum) {
    console.log("Значение истинно.");
} else {
    console.log("Значение ложно.");
}
*/
function checkTruthy(value) {
    if (value) {
        console.log("$".concat(value, " - is true"));
    }
    else {
        console.log("".concat(value, " - is false"));
    }
}
checkTruthy(10);
checkTruthy(0);
checkTruthy('Hello');
checkTruthy('');
checkTruthy(true);
checkTruthy(false);
checkTruthy(null);
checkTruthy(undefined);
