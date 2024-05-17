class AnimalD {}

class DogD extends AnimalD {}

let dogD = new DogD();

console.log(dogD instanceof DogD);
console.log(dogD instanceof AnimalD);


let strExp: any = "Hello";

console.log(strExp instanceof String);
console.log(strExp instanceof Object);


class Vehicle {}

class CarF extends Vehicle {}

let car = new CarF();
console.log(car instanceof Vehicle);


class PersonD {}

let personD = new PersonD();
console.log(personD instanceof PersonD);


class ShapeD {}

class CircleD extends ShapeD {}

class CylinderD extends CircleD {}

let cylinder = new CylinderD();
console.log(cylinder instanceof CylinderD);
console.log(cylinder instanceof CircleD);
console.log(cylinder instanceof ShapeD); 



class AnimalB {
    speak(): void {
        console.log("Animal speaks");
    }
}

class DogB extends AnimalB {
    speak(): void {
        console.log("Dog barks");
    }
}

class CatB extends AnimalB {
    speak(): void {
        console.log("Cat meows");
    }
}

let dogB = new DogB();
let catB = new CatB();

function makeAnimalSpeak(animal: AnimalB): void {
    if(animal instanceof DogB) {
        console.log("It's a dog");
        animal.speak();
    } else if(animal instanceof CatB) {
        console.log("It's a cat");
        animal.speak();
    } else {
        console.log("Unknown animal");
    }
}

makeAnimalSpeak(dogB);
makeAnimalSpeak(catB);