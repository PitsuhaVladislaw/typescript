function add(a, b) {
    return a + b;
}
var result1 = add(24, 32);
var result2 = add(17.5, 20.5);
console.log(result1);
console.log(result2);
function sum(a, b) {
    return a + b;
}
var res1 = sum(23, 45);
var res2 = sum(12, 98);
console.log(res1);
console.log(res2);
var koef = 1.5;
function add2(a) {
    var result = a * koef;
    console.log(result);
}
add2(20);
add2(10);
function add3(a, b) {
    return a + b;
}
console.log(add3(21, 34));
console.log(add3(NaN, 23));
function add4(a, b) {
    console.log(a + b);
}
add4(12, 65);
add4(1, 6);
function getName(firstName, lastName) {
    if (firstName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var name1 = getName("Иван", "Кузнецов");
console.log(name1);
var name2 = getName("Вася");
console.log(name2);
function defaultLastName() {
    return "Smith";
}
function getFullName(firstName, lastName) {
    if (lastName === void 0) { lastName = defaultLastName(); }
    return firstName + " " + lastName;
}
var name3 = getFullName("Иван", "Кузнецов");
console.log(name3);
var name4 = getFullName("Иван");
console.log(name4);
