class Person1 {
    name: string;

    constructor(userName: string) {
        this.name = userName;
    }

    print(): void {
        console.log(`Name: ${this.name}`);
    }
}

class Empolyee1 extends Person1 {

    company: string;
    work(): void {
        console.log(`${this.name} работает в компании ${this.company}`)
    }
}


class Person2 {

    name: string;
    constructor(userName: string) {

        this.name = userName;
    }
    print(): void {
        console.log(`Имя: ${this.name}`);
    }
}

class Employee2 extends Person2 {

    company: string;
    work(): void {
        console.log(`${this.name} работает в компании ${this.company}`);
    }
}

let bob1: Employee2 = new Employee2("Bob");
bob1.print();
bob1.company = "Microsoft";
bob1.work();


class Person3 {
    name: string;
}

class Employee3 extends Person3 {

    company: string;
    constructor(name: string, company: string) {

        super();
        this.name = name;
        this.company = company;
    }
    work(): void {
        console.log(`${this.name} работает в компании ${this.company}`);
    }
}

let bob2: Employee3 = new Employee3("Bob", "Microsoft");
bob2.work();


class Person4 {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    print(): void {
        console.log(`Name: ${this.name}`)
    }
}

class Empolyee4 extends Person4 {
    company: string;

    constructor(name: string, company: string) {
        super(name);
        this.company = company
    }

    print(): void {
        super.print();
        console.log(`Работает в компании: ${this.company}`);
    }
}

let bob3: Empolyee4 = new Empolyee4("Bob", "Google");
bob3.print();