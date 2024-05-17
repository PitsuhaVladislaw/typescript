function greet(name: string, age: number): void {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

type GreetParams = Parameters<typeof greet>;

const params1: GreetParams = ['Alice', 30];
console.log(params1); // Выводит ['Alice', 30]



function calculateSumD(a: number, b: number): number {
    return a + b;
}

type SumParams = Parameters<typeof calculateSumD>;

const params2: SumParams = [5, 10];
const result1 = calculateSumD(...params2);
console.log(result1);



const multiplyPa = (x: number, y: number): number => x * y;

type MultiplyParams = Parameters<typeof multiplyPa>;

const params3: MultiplyParams = [3, 4];
const result3 = multiplyPa(...params3);
console.log(result3);



function printMessagePa(message: string): void {
    console.log(message);
}

type MessageParams = Parameters<typeof printMessagePa>;

const params4: MessageParams = ['Hello, TypeScript!'];
printMessagePa(...params4);



function createPerson(name: string, age: number, city: string): void {
    console.log(`Creating a person: ${name}, ${age} years old, from ${city}`);
}

type PersonParams = Parameters<typeof createPerson>;

const personData: PersonParams = ['Alice', 30, 'New York'];
createPerson(...personData);