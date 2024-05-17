interface CounterHI {
    (start: number): string;
    interval: number;
    reset(): void;
}

function createCounterHI(): CounterHI {
    let count = 0;

    const counter = (start: number) => {
        count = start;

        return `Counter set to ${count}`
    }

    counter.interval = 10;

    counter.reset = () => {
        count = 0;
    }

    return counter;
}

const myCounterHI = createCounterHI();
console.log(myCounterHI(5));
console.log(myCounterHI.interval);
myCounterHI.reset();
console.log(myCounterHI(0));


interface UserHI {
    name: string;
    login(): void;
}

interface AdminHI {
    name: string;
    login(): void;
    logout(): void;
}

function createUserHI(name: string): UserHI & AdminHI {
    let isLoggedIn = false;

    return {
        name,
        login() {
        isLoggedIn = true;
        },
        logout() {
        isLoggedIn = false;
        }
    };
}

const userAdmin = createUserHI("Alice");
userAdmin.login();
console.log(userAdmin.name);
userAdmin.logout();


interface ItemHI {
    name: string;
    price: number;
    calculateTotal(quantity: number): number;
}

const productHI: ItemHI = {
    name: "Laptop",
    price: 1000,
    calculateTotal(quantity) {
        return this.price * quantity;
    }
};

console.log(productHI.calculateTotal(2));


interface CarHI {
    brand: string;
    startEngine(): void;
    stopEngine(): void;
    speed: number;
}

const myCarHI: CarHI = {
    brand: "Toyota",
    startEngine() {
        console.log("Engine started");
    },
    stopEngine() {
        console.log("Engine stopped");
    },
    speed: 0
};

myCarHI.startEngine();
console.log(myCarHI.brand);



interface ShapeHI {
    color: string;
}

interface CircleHI extends ShapeHI {
    raduis: number;
    area(): number;
}

interface SquareHI extends CircleHI {
    sideLength: number;
    area(): number;
}

function createCircleHI(raduis: number) {
    return {
        color: "red",
        raduis,
        area() {
            return Math.PI * this.raduis ** 2;
        }
    }
}

function createSquareHI(sideLength: number) {
    return {
        color: "blue",
        sideLength,
        area() {
            return this.sideLength ** 2;
        }
    }
}

const myCircleHI = createCircleHI(5);
console.log(myCircleHI.color);
console.log(myCircleHI.area());

const mySquareHI = createSquareHI(4);
console.log(mySquareHI.color);
console.log(mySquareHI.area());