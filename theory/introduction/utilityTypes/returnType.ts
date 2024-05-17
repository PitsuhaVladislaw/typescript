function getLength(str: string): number {
    return str.length;
}

type LengthReturn = ReturnType<typeof getLength>;

const lengthRT: LengthReturn = getLength('Hello');
console.log(lengthRT);



function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}

type AreaReturn = ReturnType<typeof calculateArea>;

const radius = 5;
const area: AreaReturn = calculateArea(radius);
console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`)



function arrayElementType<T>(arr: T[]): T {
    return arr[0];
}

const numbersRT = [1, 2, 3, 4, 5];
const firstNumberRT: number = arrayElementType(numbersRT);

const strings = ["apple", "banana", "orange"];
const firstString: string = arrayElementType(strings);



function logExecution(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result of ${propertyKey}: ${result}`);
        return result;
    };

    return descriptor;
}

class MathOperations {
    @logExecution
    add(a: number, b: number): number {
        return a + b;
    }

    @logExecution
    subtract(a: number, b: number): number {
        return a - b;
    }
}

const math = new MathOperations();
math.add(5, 3); // Logs: "Calling add with arguments: [5,3]", "Result of add: 8"
math.subtract(10, 4); // Logs: "Calling subtract with arguments: [10,4]", "Result of subtract: 6"