"use strict";
var personDetailts = {
    name: 'John',
    age: 23
};
console.log(personDetailts);
var productSummary = {
    id: 1,
    name: 'Book',
    price: 230
};
console.log(productSummary);
function displayuserDetails(userF) {
    console.log("User ID: ".concat(userF.id));
    console.log("User Name: ".concat(userF.name));
}
var userF = {
    id: 1,
    name: 'John',
    email: 'john2example.com'
};
function displayTaskPreview(task) {
    console.log("Task ID: ".concat(task.id));
    console.log("Task Title: ".concat(task.title));
    console.log("Task Completed: ".concat(task.completed ? 'Yes' : 'No'));
}
var task = {
    id: 1,
    title: 'Finish project',
    description: 'Complete all tasks and submit the project',
    completed: false
};
var taskPreview = {
    id: task.id,
    title: task.title,
    completed: task.completed
};
displayTaskPreview(taskPreview);
