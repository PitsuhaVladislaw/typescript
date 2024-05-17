function add(a, b) {
    return a + b;
}

let result1 = add(24, 32);
let result2 = add(17.5, 20.5);

console.log(result1);
console.log(result2);


function sum(a: number, b: number) {
    return a + b
}

let res1 = sum(23, 45);
let res2 = sum(12, 98);

console.log(res1);
console.log(res2);


let koef: number = 1.5;

function add2(a: number){
    let result = a *koef;
    console.log(result);
}

add2(20); 
add2(10);


function add3(a: number, b: number) : number {
    return a + b;
}

console.log(add3(21, 34));
console.log(add3(NaN, 23));


function add4(a: number, b: number) : void {
    console.log(a + b);
}

add4(12, 65);
add4(1, 6);


function getName(firstName: string, lastName?: string) {
    if(firstName) {
        return firstName + " " + lastName; 
    } else {
        return firstName;
    }
}

let name1 = getName("Иван", "Кузнецов");
console.log(name1); 
let name2 = getName("Вася");
console.log(name2);


function defaultLastName(): string {
    return "Smith";
}

function getFullName(firstName: string, lastName: string = defaultLastName()) {
    return firstName + " " + lastName;
}

let name3 = getFullName("Иван", "Кузнецов");
console.log(name3)
let name4 = getFullName("Иван");
console.log(name4);