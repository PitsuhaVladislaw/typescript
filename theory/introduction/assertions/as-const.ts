const nameExap = "Alice" as const;
let ageExap = 30 as const;


const personExapmle = {name: "Alice", age: 30} as const;

console.log(personExapmle.name);
console.log(personExapmle.age);


const strPerson = "Alice" as const;

console.log(strPerson.toUpperCase());


const numArray = [1, 2, 3] as const;

console.log(numArray[0]);
console.log(numArray[1]);
console.log(numArray[2]);


const dataPerson = {
    id: 1,
    details: {
        name: "Jack",
        age: 24
    }
} as const 

console.log(dataPerson);
console.log(dataPerson.details);
console.log(dataPerson.id);
console.log(dataPerson.details.name);


const userExample = {
    name: "Alice",
    age: 27,
    isActive: true
} as const;

console.log(`User: ${userExample.name}, Age: ${userExample.age}, Active: ${userExample.isActive ? "Yes" : "No"}`);