function isNumber(value: any): value is number {
    return typeof value === 'number';
}

console.log(isNumber(10));
console.log(isNumber('hello'));


function isString(value: any): value is string {
    return typeof value === 'string';
}

console.log(isString('hello'));
console.log(isString(10));


function isArray(value: any): value is any[] {
    return Array.isArray(value);
}

console.log(isArray([1, 2, 3]));
console.log(isArray('hello'));


function isObject(value: any): value is object {
    return typeof value === 'object' && value !== null;
}

console.log(isObject({ name: 'John' }));
console.log(isObject(10));



function isEven(num: number): num is number {
    return num % 2 === 0;
}

function processsNumber(num: number) {
    if(isEven(num)) {
        console.log(`${num} is an even number.`);
    } else {
        console.log(`${num} is an odd number`);
    }
}

processsNumber(10);
processsNumber(15);


function issString(value: unknown): value is string {
    return typeof value === 'string';
}

function example(x: unknown) {
    if(issString(x)) {
        console.log(x.toUpperCase());
    } else {
        console.log(x);
    }
}

example(1);
example('hallo, madrid');
example(true);
example(undefined);