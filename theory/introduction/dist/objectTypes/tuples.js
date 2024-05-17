"use strict";
var tuple = [10, "Hello", true];
var personAlice = ["Alice", 30];
var dataInfo = [1, "Two"];
console.log(dataInfo[0]);
console.log(dataInfo[1]);
var employee = [1, "Alice", true];
var tuples = [10, "Hello", true];
console.log(tuples); // Выводит [10, "Hello", true]
function getCoordinates() {
    return [40, 100];
}
var coordinates = getCoordinates();
console.log(coordinates);
var data2 = ["Alice", 30, true];
console.log(data2); // Выводит ["Alice", 30, true]
var tuple3 = ["Alice", 30];
tuple3[1] = 35;
console.log(tuple3); // Выводит ["Alice", 35]
var product = ["Футболка", 500, true];
console.log("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430: ".concat(product[0]));
console.log("\u0426\u0435\u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u0430: ".concat(product[1], " $."));
console.log("\u0422\u043E\u0432\u0430\u0440 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ".concat(product[2] ? "Да" : "Нет"));
