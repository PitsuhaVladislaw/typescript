let isEnabled : boolean = true
let isAlive : boolean = false;

console.log(isEnabled);
console.log(isAlive);


const decimal : number = 6;
const hex : number = 0xf00d;
const binary : number = 0b1010;
const octal : number = 0o744;

console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);


let firstName: string = "Tom";
let age: number = 28;
let info: string = `Имя ${firstName}    Возраст: ${age}`;
console.log(info);

let sentence : string = 'Hello Typescript';
console.log(sentence);


const num1 : bigint = BigInt(100);
console.log(num1);

const num2: bigint = 100n;
console.log(num2);


let someVar: any = "hello";
console.log(someVar);   // сейчас someVar - это string
console.log(typeof(someVar));

someVar = 20; 
console.log(someVar);
console.log(typeof(someVar));