function ValidateInput(
    target: any,
    key: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        for (let arg of args) {
            if (typeof arg !== 'number') {
                throw new Error('Input parameters must be numbers');
            }
        }
        return originalMethod.apply(this, args);
    }
}

class MathOperations {
    //@ValidateInput
    static add(a: number, b: number): number {
        return a + b;
    }
}

console.log(MathOperations.add(5, 3)); // Выводит 8
//console.log(MathOperations.add('5', 3)); 



function CacheD(target: any, key: string, descriptor: PropertyDescriptor) {
    const cache = new Map();
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        const key = args.join('_');
        if (cache.has(key)) {
        return cache.get(key);
        }
        const result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

class DataService {
    //@CacheD
    fetchData(endpoint: string): Promise<any> {
        return fetch(endpoint).then(response => response.json());
    }
}

const dataService = new DataService();
dataService.fetchData('https://api.example.com/data').then(data => {
    console.log(data);
});



function LogError(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        try {
        return originalMethod.apply(this, args);
        } catch (error) {
        //console.error(`Error in method ${key}: ${error.message}`);
        }
    };
}

class ErrorHandler {
    //@LogError
    static throwError(): void {
        throw new Error('An error occurred');
    }
}

ErrorHandler.throwError(); // Выведет сообщение об ошибке в консоль