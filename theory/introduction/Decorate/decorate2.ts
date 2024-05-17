class PersonDD {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @loggedMethod("")
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const p = new PersonDD("Ray");
p.greet();

function loggedMethod(headMessage = "LOG:") {
    return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
        const methodName = String(context.name);

        function replacementMethod(this: any, ...args: any[]) {
            console.log(`${headMessage} Entering method '${methodName}'.`)
            const result = originalMethod.call(this, ...args);
            console.log(`${headMessage} Exiting method '${methodName}'.`)
            return result;
        }

        return replacementMethod;
    }
}


function log (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments: ${args}`);
        return originalMethod.apply(this, args);
    }
    return descriptor;
}

class CalculatorGG {
    //@log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calculatorD = new CalculatorGG();
calculatorD.add(1, 2);