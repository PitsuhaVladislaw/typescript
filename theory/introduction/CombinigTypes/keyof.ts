type PersonP = {
    name: string;
    age: number;
    city: string;
}

type PersonKeys = keyof PersonP;

let key: PersonKeys = 'name';

console.log(key);


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let person = { name: 'Alice', age: 30 };
let nameN: string = getProperty(person, 'name');
let ageN: number = getProperty(person, 'age');


type UserV = {
    id: number;
    name: string;
};

function hasKey(obj: any, key: string): key is keyof typeof userV {
    return key in obj;
}

let userV: UserV = { id: 1, name: 'Alice' };
if (hasKey(userV, 'name')) {
    console.log('User has name property');
} else {
    console.log('User does not have name property');
}


/*
interface Shape {
    type: string;
    color: string;
}

type ShapeKeys = keyof Shape;

let shape: Shape = { type: 'circle', color: 'red' };
let colorKey: ShapeKeys = 'color';
console.log(shape[colorKey]); // Выводит 'red'
*/


class CarВ {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    getDetails(key: keyof this): any {
        return this[key];
    }
}

let carB = new CarВ('Toyota', 'Camry');
console.log(carB.getDetails('brand'));



interface Student {
    id: number;
    name: string;
    age: number;
}

function displayStudentInfo(student: Student): void {
    const keys: (keyof Student)[] = Object.keys(student) as (keyof Student)[];
    keys.forEach(key => {
        console.log(`${key}: ${student[key]}`);
    });
}

let studentB: any = { id: 1, name: 'Alice', age: 20 };
displayStudentInfo(studentB);



interface Pperson {
    name: string;
    age: number;
    address: string;
}

type PersonKeysS = keyof PersonP;


/*
interface Car {
    brand: string;
    model: string;
    year: number;
}

const carF: Car = {
    brand: "Toyota",
    model: "Camry",
    year: 2021
};

function getPropertyValue(obj: Car, key: keyof Car) {
    return obj[key];
}

const brand = getPropertyValue(car, "brand");
console.log(brand);
*/


interface Product {
    id: number;
    name: string;
    price: number;
}

function displayProductInfo(product: Product, key: keyof Product) {
    console.log(`${key}: ${product[key]}`);
}

const productD: Product = { id: 1, name: "Laptop", price: 1000 };
displayProductInfo(productD, "name");



interface Book {
    title: string;
    author: string;
}

function hasKeyF(obj: Book, key: keyof Book): boolean {
    return key in obj;
}

const book: Book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }

console.log(hasKeyF(book, "title"));
console.log(hasKeyF(book, "author"));