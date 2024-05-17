function addF(a: number, b: number): number {
    return a + b;
}

const results: number = addF(3, 5);
console.log(results);


function greetG(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greetG("Alice"));
console.log(greetG("Bob", "Hi"));


function multiply(a: number, b: number = 2): number {
    return a * b;
}

console.log(multiply(4));
console.log(multiply(4, 3));


function calculate(operation: (a: number, b: number) => number, x: number, y: number): number {
    return operation(x, y);
}

const sum = (a: number, b: number): number => a + b;
console.log(calculate(sum, 3, 5));


function displayInfo(name: string, age: number): void {
    console.log(`Name: ${name}, Age: ${age}`);
}

displayInfo("John", 30);



type MathOperation = (a: number, b: number) => number;

function calculateFunc(operation: MathOperation, x: number, y: number): number {
    return operation(x, y);
}

const sumFunc: MathOperation = (a, b) => a + b;
const differenceFunc: MathOperation = (a, b) => a - b;

console.log(calculate(sumFunc, 5, 19));
console.log(calculate(differenceFunc, 19, 5));