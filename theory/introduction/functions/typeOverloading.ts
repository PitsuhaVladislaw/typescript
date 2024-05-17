function display(value: string): void;
function display(value: number): void;
function display(value: string | number): void {
    if (typeof value === 'string') {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

display("Hello");
display(123);


function getMax(a: number, b: number): number;
function getMax(a: number, b: number, c: number): number;
function getMax(a: number, b: number, c?: number): number {
    if (c) {
        return Math.max(a, b, c);
    } else {
        return Math.max(a, b);
    }
}

const max1 = getMax(5, 10);
const max2 = getMax(3, 8, 4);


function processArray(arr: number[]): number[];
function processArray(arr: string[]): string[];
function processArray(arr: any[]): any[] {
    return arr.map(item => item);
}

const arr1 = processArray([1, 2, 3]);
const arr2 = processArray(["a", "b", "c"]);


function mergeObjects(obj1: { a: number }, obj2: { b: number }): { a: number, b: number };
function mergeObjects(obj1: { a: string }, obj2: { b: string }): { a: string, b: string };
function mergeObjects(obj1: any, obj2: any): any {
    return { ...obj1, ...obj2 };
}

const merged1 = mergeObjects({ a: 1 }, { b: 2 });
const merged2 = mergeObjects({ a: "Hello" }, { b: "World" });


function displayData(data: number): void;
function displayData(data: string): void;
function displayData(data: any): void {
    console.log(data);
}

displayData(10);
displayData("Hello");



function formatData(data: number): string;
function formatData(data: string): string;
function formatData(data: number | string): string {
    if(typeof data === 'number') {
        return "Number: " + data;
    } else {
        return "String: " + data;
    }
}

const formattedNumber = formatData(10);
const formattedString = formatData("Hello");