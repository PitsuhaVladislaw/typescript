class User1 {
    name: string;
    age: number;
}

let tommy: User1 = new User1();
tommy.name = "Tommy";
tommy.age = 23;

console.log(`name: ${tommy.name}, age: ${tommy.age}`);


class User2 {
    name: string;
    age: number;

    print() {
        console.log(`name: ${this.name}, age: ${this.age}`)
    }

    toString(): string {
        return `${this.name}, ${this.age}`
    }
}


class User3 {
    name: string;
    age: number;
    constructor(userName: string, userAge: number) {

        this.name = userName;
        this.age = userAge;
    }
    print(){
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
}

let tobby = new User3("Tobby", 36);
tobby.print();


class User4 {
    readonly name: string = "Default user";
    age: number;
    constructor(userName: string, userAge: number) {
        
        this.name = userName;
        this.age = userAge;
    }

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let kira = new User4("Kira", 23);
//kira.name = "Katy";
kira.print();