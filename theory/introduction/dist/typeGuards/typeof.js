"use strict";
var num = 10;
console.log(typeof num);
var str2 = "Hello";
console.log(typeof str2);
var isTrue = true;
console.log(typeof isTrue);
var obj3 = { name: "John", age: 25 };
console.log(typeof obj3);
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
console.log(typeof greet);
function checkType(data) {
    console.log("The data \"".concat(data, "\" is of type: ").concat(typeof data));
}
checkType(10);
checkType("Hello");
checkType(true);
checkType({ name: "Alice", age: 30 });
checkType([1, 2, 3]);
checkType(null);
