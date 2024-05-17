let nameF: string | null = "Alice";
let lengthF: number = nameF!.length;
console.log(lengthF);


/*
interface User {
    nameV: string | null;
}

let userG: User = { nameV: "Bob" };
let userNameLength: number = userG.nameV!.length;
console.log(userNameLength); // Выводит длину имени "Bob"
*/


function greetF(name: string | null): void {
    let userName: string = name!;

    console.log(`Hello, ${userName}!`);
}

greetF("John");


let numbersS: number[] | null = [1, 2, 3, 4];
let firstNumber: number = numbersS![0];
console.log(firstNumber);


/*
let data: string | null = fetchData();
let message: string = data || "No data available";
console.log(message);
*/


/*
interface Product {
    id: number;
    name: string;
    price: number | null;
}

function calculateTotalPrice(product: Product): number {
    let price: number = product.price || 0; // Используем значение по умолчанию, если price равно null
    return price * 1.2; // Добавляем НДС
}

let product: Product = { id: 1, name: "Phone", price: 500 };
let totalPrice: number = calculateTotalPrice(product);
console.log(`Total price with VAT: $${totalPrice}`);
*/