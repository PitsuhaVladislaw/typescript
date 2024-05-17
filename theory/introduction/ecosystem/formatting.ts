function greetDD(name: string): void {
    if(name === 'Alice') {
        console.log('Hello, Alice!');
    } else {
        console.log('Hello, ' + name + '!');
    }
}

greetDD('Alice');
greetDD("David");
greetDD('Jack');



let xD: number = 10;
let yD: number = 20;

if (xD < yD) {
    console.log('x is less than y');
} else {
    console.log('x is greater than or equal to y');
}

console.log(yD, xD);



function addNumbers(a: number, b: number): number {
    return a + b;
}

addNumbers(10, 29);



let personFD: { name: string, age: number } = {
    name: 'John',
    age: 30
};

console.log(personFD);



class AnimalFO {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class DogFO extends AnimalFO {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    speak(): void {
        console.log(`${this.name} barks`);
    }
}

let dog1 = new DogFO('Buddy', 'Labrador');
dog1.speak();