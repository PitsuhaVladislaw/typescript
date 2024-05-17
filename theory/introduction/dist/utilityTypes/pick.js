"use strict";
var personInfo = {
    name: 'Alice',
    age: 30
};
console.log(personInfo);
var carSummary = {
    make: ' Toyota',
    model: 'Camry'
};
console.log(carSummary);
function displayAnimalDetails(animal) {
    console.log('Animal Details:');
    console.log("Species: ".concat(animal.species));
    console.log("Habitat: ".concat(animal.habitat));
    console.log("Lifespan: ".concat(animal.lifespan, " years"));
}
var lionA = {
    species: 'Lion',
    habitat: 'Savannah',
    sound: 'Roar',
    lifespan: 10
};
var lionADetailts = {
    species: lionA.species,
    habitat: lionA.habitat,
    lifespan: lionA.lifespan
};
displayAnimalDetails(lionADetailts);
