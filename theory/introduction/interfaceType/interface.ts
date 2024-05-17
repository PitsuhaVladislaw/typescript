interface PersonV {
    name: string;
    age: number;
}


const personV: PersonV = {
    name: "Alice",
    age: 30
};


interface UserDV {
    name: string;
    age?: number;
}


interface PointDV {
    readonly x: number;
    readonly y: number;
}


interface ShapeDV {
    color: string;
}

interface CircleDV extends ShapeDV {
    radius: number;
}


interface PointDV {
    readonly x: number;
    readonly y: number;
}

const point: PointDV = {
    x: 10,
    y: 20
};


interface AnimalDV {
    type: string;
}

interface DogDV extends AnimalDV {
    breed: string;
}

const dogDV: DogDV = {
    type: "Mammal",
    breed: "Labrador"
};


interface GreetingDV {
    (name: string): void;
}

const sayHelloDV: GreetingDV = (name: string) => {
    console.log(`Hello, ${name}!`);
};

sayHelloDV("Alice");


interface Dictionary {
    [key: string]: string;
}

const colors: Dictionary = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};



interface VehicleV {
    brand: string;
    model: string;
    year: number;
}


class CarV implements VehicleV {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(): void {
        console.log(`Car: ${this.year} ${this.brand} ${this.model}`);
    }
}

const newCar = new CarV("Toyota", "Corolla", 2021);
newCar.displayInfo();