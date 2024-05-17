const obj: object = {
    prop1: "value1",
    prop2: 2,
};

const objPerson: object = {
    name: "John",
    age: 32
}

console.log((objPerson as any).name);
console.log((objPerson as any).age);


interface Personns {
    name: string;
    age: number;
}

const personns : Personns = {
    name: "Jack",
    age: 61
}

console.log(personns.name);


interface Car {
    brander: string;
    model: string;
    year: number;
}

function displayCarInfo(car: Car): void {
    console.log(`Brand: ${car.brander}`);
    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
}
/*
const myCars: Car = {
    brander: "Toyota",
    model: "Camry",
    year: 2020,
};

displayCarInfo(myCars);
*/

interface UserPersonal {
    name: string,
    age: number,
    address: {
        street: string,
        city: string,
        country: string 
    }
}

function displayPersonInfo(person: UserPersonal) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Address: ${person.address.street}, ${person.address.city}, ${person.address.country}`);
}

const personUser: object = {
    name: "John",
    age: 25,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}

displayPersonInfo(personUser as UserPersonal);