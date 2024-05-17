class Person7 {
    name: string;
    private _age: number;
    private _name: string;

    public get age(): number {
        return this._age;
    }

    public set age(n: number) {
        if(n < 0 || n > 110){
            console.log("Недопустимый возраст!");
        }
        else{
            this._age = n;
        }
    }
}

let tom4 = new Person7();
tom4.name = "Tom";
tom4.age = 36;           
console.log(tom4.age);   // 36
tom4.age = -1243;        // Недопустимый возраст!   
console.log(tom4.age); 


class User7 {
    name: string;
    private _name: string;
    private _age: number;

    public get age():number {
        return this._age;
    }

    public set age(n: number) {
        if(n < 0 || n > 100) {
            console.log(`Fault..`)
        } else {
            this._age = n;
        }
    }
}

let busia: User7 = new User7();
busia.name = "Busia";
busia.age = 18;
console.log(busia.age);

busia.age = -20;
console.log(busia.age);