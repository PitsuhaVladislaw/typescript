namespace MyNamespace {
    export interface Person {
        name: string;
        age: number;
    }
}

namespace MyNamespace {
    export function greetD(): void {
        console.log("Hello!");
    }
}



namespace MyNamespace {
    export const PI = 3.14;
}

namespace MyNamespace {
    export const E = 2.71;
}

console.log(MyNamespace.PI);
console.log(MyNamespace.E);