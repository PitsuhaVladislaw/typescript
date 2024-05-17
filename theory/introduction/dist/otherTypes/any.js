"use strict";
var value;
value = 10;
value = "Hello";
value = true;
var data = 100;
console.log(data.toFixed(2));
data = "200";
console.log(data.toUpperCase());
var data1;
data1 = 10;
console.log(data1);
data1 = "Hello";
console.log(data1);
var items = [1, "data", true];
console.log(items);
function processDate(data) {
    if (typeof data === 'number') {
        console.log("Received number: ".concat(data));
    }
    else if (typeof data === 'string') {
        console.log("Received string: ".concat(data));
    }
    else {
        console.log("Received data of type: ".concat(typeof data));
    }
}
processDate(items[0]);
processDate(items[1]);
processDate(items[2]);
