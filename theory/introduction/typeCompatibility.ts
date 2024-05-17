let numB: number = 5;
let anyNum: any = numB;

let str: string = "hello";
let anyStr: any = str;

let numOrStr : number | string = 10;
numOrStr = "Hello"


interface Shapelbee {
    color: string
}

interface CircleC extends Shapelbee {
    raduis: number;
}

let shape: Shapelbee = {color: "red"}


let fn1 = (x: number) => console.log(x);
let fn2 = (y: number, z: number) => console.log(y + z);

fn2 = fn1; // Контравариантность


interface AnimalC {
    name: string;
}

class CatC implements AnimalC {
    name: string;
    breed: string;

    constructor(name: string, breed: string) {
        this.name = name;
        this.breed = breed;
    }
}

class DogC implements AnimalC {
    name: string;
    breed: string;

    constructor(name: string, breed: string) {
        this.name = name;
        this.breed = breed;
    }
}

let dogc: DogC = new DogC("Buddy", "Labrador");
let catc: CatC = new CatC("Whiskers", "Gray");

let animalC: AnimalC;