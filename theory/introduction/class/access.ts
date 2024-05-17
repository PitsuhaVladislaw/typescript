class PersonA {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public displayInfo(): void {
        console.log(`Name: ${this.name}`);
    }
}


const personA = new PersonA("Alice");
console.log(personA.name);
personA.displayInfo();



class BankAccountA {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    
    public getBalance(): number {
        return this.balance;
    }

    public deposit(amount: number) {
        this.balance += amount;
    }
}


const accountA = new BankAccountA(1000);
console.log(accountA);
console.log(accountA.getBalance());
accountA.deposit(500);
console.log(accountA.getBalance());



class AnimalA {
    protected age: number;

    constructor(age: number) {
        this.age = age;
    }

    protected getAge(): number {
        return this.age;
    }
}

class DogA extends AnimalA {
    private breed: string;

    constructor(age: number, breed: string) {
        super(age);
        this.breed = breed;
    }

    public displayInfo(): void {
        console.log(`Age: ${this.getAge()}, Breed: ${this.breed}`);
    }
}


const dogA = new DogA(5, "Labrador");
dogA.displayInfo();



class CounterA {
    private count: number = 0;

    private increment(): void {
        this.count++; 
    }

    public getCount(): number {
        this.increment();
        return this.count;
    }
}

const counterA = new CounterA();
console.log(counterA.getCount());



class EmployeeA {
    protected id: number;
    protected name: string;
    public department: string;

    constructor(id: number, name: string, department: string) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    public dispalyInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`);
    }
}

class Manager extends EmployeeA {
    private teamSize: number;

    constructor(id: number, name: string, department: string, teamSize: number) {
        super(id, name, department);
        this.teamSize = teamSize;
    }

    public dispalyManagerInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Department: ${this.department}, Team Size: ${this.teamSize}`)
    }
}

const employeeA = new EmployeeA(1, "Alice", "HR");
employeeA.dispalyInfo();

const manager = new Manager(2, "Bob", "IT", 120);
manager.dispalyManagerInfo();