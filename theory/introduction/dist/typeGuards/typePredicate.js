"use strict";
function isNumber(value) {
    return typeof value === 'number';
}
console.log(isNumber(10));
console.log(isNumber('hello'));
function isString(value) {
    return typeof value === 'string';
}
console.log(isString('hello'));
console.log(isString(10));
function isArray(value) {
    return Array.isArray(value);
}
console.log(isArray([1, 2, 3]));
console.log(isArray('hello'));
function isObject(value) {
    return typeof value === 'object' && value !== null;
}
console.log(isObject({ name: 'John' }));
console.log(isObject(10));
function isEven(num) {
    return num % 2 === 0;
}
function processsNumber(num) {
    if (isEven(num)) {
        console.log("".concat(num, " is an even number."));
    }
    else {
        console.log("".concat(num, " is an odd number"));
    }
}
processsNumber(10);
processsNumber(15);
function issString(value) {
    return typeof value === 'string';
}
function example(x) {
    if (issString(x)) {
        console.log(x.toUpperCase());
    }
    else {
        console.log(x);
    }
}
example(1);
example('hallo, madrid');
example(true);
example(undefined);
