"use strict";
var partialUser1 = { name: 'Alice' };
console.log(partialUser1);
var partialBook = { title: 'TypeScript in Action' };
console.log(partialBook); // { title: 'TypeScript in Action' }
var Task = /** @class */ (function () {
    function Task(title, completed) {
        this.title = title;
        this.completed = completed;
    }
    return Task;
}());
var partialTask = { title: 'Finish project' };
console.log(partialTask);
function displayCarInfoD(car) {
    console.log('Car Information: ');
    if (car.make) {
        console.log("Make: ".concat(car.make));
    }
    if (car.model) {
        console.log("Model: ".concat(car.model));
    }
    if (car.year) {
        console.log("Year: ".concat(car.year));
    }
    if (car.color) {
        console.log("Color: ".concat(car.color));
    }
}
var partialCar1 = { make: 'Totota', model: 'Camry' };
displayCarInfoD(partialCar1);
var partialCar2 = { make: 'Honda', year: 2020, color: 'Red' };
displayCarInfoD(partialCar2);
