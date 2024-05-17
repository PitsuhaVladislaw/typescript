"use strict";
var message1 = "Hello, World!";
console.log(message1);
var combined = "Hello World";
console.log(combined);
var colorTL = 'red car';
console.log(colorTL);
var eventUser = 'click:button';
console.log(eventUser);
var welcome = 'Welcome, John';
console.log(welcome);
function handleEvent(event) {
    console.log("Handling event ".concat(event));
}
handleEvent('click:button');
