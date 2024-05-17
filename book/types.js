function printedId(inputId) {
    console.log("Id: ".concat(inputId));
}
function getId(isNumber) {
    if (isNumber) {
        return 1;
    }
    else {
        return -1;
    }
}
printedId(21234);
printedId("qwerty");
console.log(getId(true));
var toma = { name: "Toma", age: 36 };
var boba = { name: "Boba", age: 41 };
function printPerson(user) {
    console.log("Name: ".concat(user.name, "  Age: ").concat(user.age));
}
printPerson(toma);
printPerson(boba);
var max = { name: "Max", age: 24 };
var kay = { name: "Kay", age: 41, company: "Microsoft" };
function printPersons(user) {
    console.log("Name: ".concat(user.name, ", Age: ").concat(user.age));
}
printPersons(max);
printPersons(kay);
