var person = { name: "Tom", age: 55 };
console.log(person.name);
console.log(person.age);
var user = { name: "Tom", age: 36 };
if (user.age !== undefined) {
    console.log(user.age);
}
function sendInfo(user) {
    console.log("name: ".concat(user.name, ", age: ").concat(user.age));
}
var bob = { age: 46, name: "Bob" };
sendInfo(bob);
function printUser(user) {
    console.log("name: ".concat(user.name, "  age: ").concat(user.age));
}
var derek = { name: "Derek", age: 44, isMarried: true };
printUser(derek);
var ilya = { name: "Ilya", age: 43 };
var keya = { age: 23, name: "Keya" };
function printInfo(user) {
    if ("age" in user) {
        console.log("Name: ".concat(user.name, " Age: ").concat(user.age));
    }
    else {
        console.log("Name: ".concat(user.name));
    }
}
printInfo(ilya);
printInfo(keya);
function userSend(_a) {
    var name = _a.name, age = _a.age;
    if (age !== undefined) {
        console.log("Name: " + name + ", " + "Age: " + age);
    }
    else {
        console.log("Name: " + name);
    }
}
var marya = { name: "Marya" };
userSend(marya);
var kevin = { name: "Kevin", age: 25 };
userSend(kevin);
