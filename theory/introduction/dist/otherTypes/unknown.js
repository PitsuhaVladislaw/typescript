"use strict";
var userInput;
var userName;
userInput = 5;
//userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
function processInput(input) {
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    }
    else {
        console.log('Input is not a string');
    }
}
processInput("hello");
processInput(10);
function getUserInfo(user) {
    if (typeof user === 'object' && user !== null) {
        var _a = user, name_1 = _a.name, age_1 = _a.age;
        console.log("User ".concat(name_1, ", Age ").concat(age_1));
    }
    else {
        console.log("Invalid user data");
    }
}
var userData = { name: "Alice", age: 30 };
getUserInfo(userData); // Выводит "User: Alice, Age: 30"
var invalidData = "John";
getUserInfo(invalidData); // Выводит "Invalid user data"
