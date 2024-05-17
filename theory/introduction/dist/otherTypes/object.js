"use strict";
var obj = {
    prop1: "value1",
    prop2: 2,
};
var objPerson = {
    name: "John",
    age: 32
};
console.log(objPerson.name);
console.log(objPerson.age);
var personns = {
    name: "Jack",
    age: 61
};
console.log(personns.name);
function displayCarInfo(car) {
    console.log("Brand: ".concat(car.brander));
    console.log("Model: ".concat(car.model));
    console.log("Year: ".concat(car.year));
}
function displayPersonInfo(person) {
    console.log("Name: ".concat(person.name));
    console.log("Age: ".concat(person.age));
    console.log("Address: ".concat(person.address.street, ", ").concat(person.address.city, ", ").concat(person.address.country));
}
var personUser = {
    name: "John",
    age: 25,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};
displayPersonInfo(personUser);
