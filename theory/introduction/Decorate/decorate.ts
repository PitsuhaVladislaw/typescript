/*
function Logger(target: Function) {
    console.log(`Logging class: ${target.name}`);
}

@Logger
class MyClass {
    constructor() {}
}
*/



function Log2(target: any, key: string) {
    console.log(`Logging method: ${key} in ${target.constructor.name}`);
}

class MyClassD2 {
    //@Log
    myMethod() {}
}



function ReadOnly(target: any, key: string) {
    Object.defineProperty(target, key, { writable: false });
}

class MyClassD3 {
    //@ReadOnly
    readonly myProperty: string = 'read-only';
}



function Repeat(count: number) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function() {
            for (let i = 0; i < count; i++) {
                originalMethod.apply(this, arguments);
            }
        };
    };
}

class MyClass {
    //@Repeat(3)
    myMethod() {
        console.log('Hello');
    }
}



function Injectable(target: Function) {
  // Logic for dependency injection
}

@Injectable
class MyService {
    constructor() {}
}



function Log(target: any, key: string) {
    console.log(`Logging method: ${key} in ${target.constructor.name}`);
}

class LoggerG {
    //@Log
    logMessage(message: string) {
        console.log(`Message logged: ${message}`);
    }
}

function Measuere(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`Method ${key} executed in ${end - start}ms`);
        return result;
    }
}

class Calculator {
    //@Measuere
    add(a: number, b: number): number {
        return a + b;
    }
}

//const loggerG = LoggerG();
//loggerG.logMessage('Hello, Decorates!');

const calculator = new Calculator();
console.log(calculator.add(5, 3));