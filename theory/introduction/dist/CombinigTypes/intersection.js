"use strict";
var employeeDepartment = {
    name: "Alice",
    employeeId: 12345,
    departmentName: "HR",
    manager: "Bob"
};
console.log(employeeDepartment);
function printAndLog(item) {
    item.print();
    item.log();
}
var objV = {
    print: function () { return console.log("Printing..."); },
    log: function () { return console.log("Logging..."); }
};
printAndLog(objV);
var valueV;
var Sparrow = /** @class */ (function () {
    function Sparrow(name) {
        this.name = name;
    }
    Sparrow.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    Sparrow.prototype.fly = function () {
        console.log("".concat(this.name, " is flying."));
    };
    Sparrow.prototype.makeSound = function () {
        console.log("".concat(this.name, " is chirping."));
    };
    return Sparrow;
}());
var sparrow = new Sparrow("Sparrow");
sparrow.eat();
sparrow.fly();
sparrow.makeSound();
