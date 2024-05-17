class PersonIn {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

type PersonInstance = InstanceType<typeof PersonIn>;

const personIn: PersonInstance = new PersonIn("Alice", 23);
console.log(personIn.name);



class CarIn {
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
}

type CarInstance = InstanceType<typeof CarIn>;

const carIn: CarInstance = new CarIn("Toyota");
console.log(carIn.brand);



class ProductIn {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

type ProductInstance = InstanceType<typeof ProductIn>

const productIn: ProductInstance = new ProductIn("Laptop", 1000);
console.log(productIn.name);
console.log(productIn.price);



class PointIn {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

type Pointinstance = InstanceType<typeof PointIn>;

const pointIn: Pointinstance = new PointIn(5, 10);
console.log(pointIn.x);



class AnimalIn {
    species: string;

    constructor(species: string) {
        this.species = species;
    }
}

class DogIn extends AnimalIn {
    breed: string;

    constructor(species: string, breed: string) {
        super(species)
        this.breed = breed;
    }
}

type DogInstance = InstanceType<typeof DogIn>;

const dogIn: DogInstance = new DogIn("Dog", "Labrador");
console.log(dogIn.species);
console.log(dogIn.breed);