class Person5 {
    
    private _name: string;
    private _year: number;

    constructor(name: string, age: number) {

        this._name = name;
        this._year = this.setYear(age);
    }
    public print(): void {
        console.log(`Имя: ${this._name}  Год рождения: ${this._year}`);
    }

    private setYear(age: number): number {

        return new Date().getFullYear() - age;
    }
}

let tom3 = new Person5("Tom", 24);
tom3.print();


class Person6 {
    protected name: string;
    private year: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.year = this.setYear(age);
    }

    protected printPerson(): void {
        console.log(`Name: ${this.name}, Age: ${this.year}`);
    }

    private setYear(age: number): number {
        return new Date().getFullYear() - age;
    }
}

class Employee5 extends Person6 {
    protected company: string;

    constructor(name: string, age: number, company: string) {
        super(name, age);
        this.company = company;
    }

    public printEmployee(): void {
        this.printPerson();
        console.log(`Company: ${this.company}`);
    }
}

let connor: Employee5 = new Employee5("Connor", 27, "Google");
connor.printEmployee();