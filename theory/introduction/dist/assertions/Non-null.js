"use strict";
var nameF = "Alice";
var lengthF = nameF.length;
console.log(lengthF);
/*
interface User {
    nameV: string | null;
}

let userG: User = { nameV: "Bob" };
let userNameLength: number = userG.nameV!.length;
console.log(userNameLength); // Выводит длину имени "Bob"
*/
function greetF(name) {
    var userName = name;
    console.log("Hello, ".concat(userName, "!"));
}
greetF("John");
var numbersS = [1, 2, 3, 4];
var firstNumber = numbersS[0];
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
