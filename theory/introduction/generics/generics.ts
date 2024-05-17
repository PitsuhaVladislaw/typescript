function getArrayLength<T> (arr: T[]) {
    return arr.length;
}

const numberS = [1, 2, 3, 4, 5];
const namesS = ["Alice", "Ban", "Bobi"];

console.log(getArrayLength(numberS));
console.log(getArrayLength(namesS));



class Pair <T, U> {
    constructor(public first: T, public second: U) {}
}

const pair1 = new Pair<number, string>(10, 'Hello');
const pair2 = new Pair<string, boolean>('typescript', true);

console.log(pair1);
console.log(pair2 );



function mergeArrays<T>(arr1: T[], arr2: T[]) :T[] {
    return[...arr1, ...arr2];
}

const numbersS1 = [1, 2, 3];
const numbersS2 = [4, 5, 6];

console.log(mergeArrays(numbersS1, numbersS2));



function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

const fruits1 = ["banana", "apple", "orange", "straberry"] 
//const fruits2 = [];

console.log(getArrayLength(fruits1));
//console.log(getArrayLength(fruits2));



interface Pair <T, U> {
    first: T;
    second: U;
}

const pair: Pair <number, string> = {
    first: 10,
    second: 'Hello'
}

console.log(pair);



class Queue <T> {
    private elements: T[] = [];

    enqueue(element: T): void {
        this.elements.push(element);
    }

    dequeue(): T | undefined {
        return this.elements.shift();
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }
}

const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);

while (!numberQueue.isEmpty()) {
    console.log(numberQueue.dequeue());
}

const stringQueue = new Queue<string>();

stringQueue.enqueue('Hello');
stringQueue.enqueue('World');

while (!stringQueue.isEmpty()) {
    console.log(stringQueue.dequeue());
}