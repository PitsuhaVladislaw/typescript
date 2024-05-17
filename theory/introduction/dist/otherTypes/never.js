"use strict";
function throwError(mes) {
    throw new Error(mes);
}
throwError("something went wrong");
function infiniteLoop() {
    while (true) {
        console.log("Imfinite loop");
    }
}
infiniteLoop();
function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 2;
    }
    else {
        throw new Error("Invalid value type");
    }
}
console.log(processValue("hello")); // Выводит "HELLO"
console.log(processValue(5)); // Выводит 10
// console.log(processValue(true)); // Ошибка: Invalid value type, функция выбрасывает ошибку типа "never"
