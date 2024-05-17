"use strict";
var nameExap = "Alice";
var ageExap = 30;
var personExapmle = { name: "Alice", age: 30 };
console.log(personExapmle.name);
console.log(personExapmle.age);
var strPerson = "Alice";
console.log(strPerson.toUpperCase());
var numArray = [1, 2, 3];
console.log(numArray[0]);
console.log(numArray[1]);
console.log(numArray[2]);
var dataPerson = {
    id: 1,
    details: {
        name: "Jack",
        age: 24
    }
};
console.log(dataPerson);
console.log(dataPerson.details);
console.log(dataPerson.id);
console.log(dataPerson.details.name);
var userExample = {
    name: "Alice",
    age: 27,
    isActive: true
};
console.log("User: ".concat(userExample.name, ", Age: ").concat(userExample.age, ", Active: ").concat(userExample.isActive ? "Yes" : "No"));
