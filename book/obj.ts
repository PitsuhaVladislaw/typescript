let person: {name: string, age: number} = {name: "Tom", age: 55};

console.log(person.name);
console.log(person.age);


let user: { name: string; age?: number } = { name: "Tom", age: 36};
if (user.age !== undefined) {

    console.log(user.age);
}


function sendInfo(user: {name: string, age: number}) {
    console.log(`name: ${user.name}, age: ${user.age}`);
}

let bob = {age: 46, name: "Bob"}

sendInfo(bob);


function printUser(user: { name: string; age: number}) {
    console.log(`name: ${user.name}  age: ${user.age}`);
}
let derek = {name: "Derek", age: 44, isMarried: true};
printUser(derek);


let ilya: {name: string, age: number} = {name: "Ilya", age: 43}
let keya: {name: string, age: number} = {age: 23, name: "Keya"}

function printInfo(user: {name: string, age?: number}) {
    if("age" in user) {
        console.log(`Name: ${user.name} Age: ${user.age}`);
    } else {
        console.log(`Name: ${user.name}`)
    }
}

printInfo(ilya);
printInfo(keya);


function userSend({name, age}: {name: string, age?: number}) {
    if(age !== undefined) {
        console.log("Name: " + name + ", " + "Age: " + age);
    } else {
        console.log("Name: " + name);
    }
}

let marya = {name: "Marya"}
userSend(marya);

let kevin = {name: "Kevin", age: 25}
userSend(kevin);