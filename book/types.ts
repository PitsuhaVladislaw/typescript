type id = string | number;

function printedId(inputId: id){
    console.log(`Id: ${inputId}`);
}

function getId(isNumber: boolean) {
    if(isNumber) {
        return 1;
    } else {
        return -1;
    }
}

printedId(21234);
printedId("qwerty");
console.log(getId(true));


type Person = {name: string; age: number};

let toma: Person = {name: "Toma", age: 36};
let boba: Person = {name: "Boba", age: 41};

function printPerson(user: Person){
    console.log(`Name: ${user.name}  Age: ${user.age}`);
}

printPerson(toma);
printPerson(boba);


type Users = {name: string, age: number};
type Employee = Users & {company: string};

let max: Users = {name: "Max", age: 24}
let kay: Employee = {name: "Kay", age: 41, company: "Microsoft"}

function printPersons(user: Person) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

printPersons(max);
printPersons(kay);