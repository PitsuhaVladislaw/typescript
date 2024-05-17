/*
*/

class Car {
    name: string
    price: number

    constructor(name:string, price: number) {
        this.name = name
        this.price = price
    }

    public getInfo():string {
        return `${this.name} - ${this.price}`
    }
}

class Bus extends Car {
    constructor(name: string, price: number) {
        super(name, price)
    }

    protected test() {
        return this.getInfo()
    }
}

const carFirst = new Car("BMW", 200000)
const carSecond = new Car("Mercedes", 350000)

console.log(carFirst.getInfo())
console.log(carSecond.getInfo())
//*Book