class PersonRR {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const personRR = new PersonRR("Alice");
//personRR.name = "Bob";



interface PointRR {
    readonly x: number;
    readonly y: number;
}

let pointRR: PointRR = { x: 10, y: 20}
//pointRR.x = 15;



class CircleRR {
    readonly PI = 3.14;
    readonly raduisR: number;

    constructor(raduisR: number) {
        this.raduisR = raduisR;
    }

    getArea(): number {
        return this.PI * this.raduisR * this.raduisR;
    }
}



let readonlyArray: readonly number[] = [1, 2, 3, 4];
//readonlyArray.push(5);



function printMessage(message: readonly string[]) {
    //message.push("Hello"); // Ошибка: Нельзя изменять параметр только для чтения
}

printMessage(["Hi", "Hola"]);



class AnimalRR {
    protected readonly species: string;

    constructor(species: string) {
        this.species = species;
    }
}

class DogRR extends AnimalRR {
    constructor() {
        super("DogRR")
    }

    displaySpecies(): void {
        console.log(`Species: ${this.species}`)
    }
}

const dogRR = new DogRR();

//dogRR.species = "Cat";
dogRR.displaySpecies();



class PersonRRD {
    private readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

    getId(): number {
        return this.id;
    }
}

const personRRD = new PersonRRD(1);
//personRRD.id = 2;
console.log(personRRD.getId());



class ProductRR {
    readonly id: number;
    readonly name: string;
    readonly price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    displayInfo(): void {
        console.log(`Product ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`);
    }
}

const productRRR = new ProductRR(1, "Phone", 500);
//product.price = 600;
productRRR.displayInfo();