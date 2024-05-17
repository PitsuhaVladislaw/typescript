namespace Shapes {
    export class Circle {
        constructor(public radius: number) {}

        getArea(): number {
            return Math.PI * this.radius ** 2;
        }
    }
}

let myCircleNS = new Shapes.Circle(5);
console.log(myCircleNS.getArea());


namespace Data {
    export interface Account {
        name: string;
        age: number;
    }

    export interface Product {
        name: string;
        price: number;
    }
}

let accountNS: Data.Account = {
    name: 'Alice',
    age: 30
}

let productNS: Data.Product = {
    name: 'Phone',
    price: 300
}



namespace OuterNamespace {
    export namespace InnerNamespave {
        export class MyClass {
            sayHello():void {
                console.log('Hello from InnerNamespace');
            }
        }
    }
}

let objNS = new OuterNamespace.InnerNamespave.MyClass();
objNS.sayHello();



namespace MathFunctioms {
    export function sum(a: number, b: number): number {
        return a  + b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }
}

console.log(MathFunctioms.sum(2, 5));
console.log(MathFunctioms.multiply(2, 3));



import { Constants } from './contacts/contacts';

console.log(Constants.PI);
console.log(Constants.GRAVITY);


namespace Geometry {
    export class Circle {
        constructor(public raduis: number) {}

        getArea(): number {
            return Math.PI * this.raduis ** 2;
        }
    }

    export class Rectangle {
        constructor(public width: number, public height: number) {}

        getArea():number {
            return this.width * this.height;
        }
    }
}

let circle = new Geometry.Circle(5);
let rectangle = new Geometry.Rectangle(3, 4);

console.log(circle.getArea());
console.log(rectangle.getArea());