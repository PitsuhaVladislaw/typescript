let user1: [string, number] = ["Tom", 36];
console.log(user1[1]);
user1[1] = 37;
console.log(user1[1]);


let user2: [string, number] = ["Tom", 36];
for(const prop of user2){
    console.log(prop);
}


function createUser(name: string, age: number) : [string, number] {
    return [name, age]
}

let user4 = createUser("Timmy", 26);
console.log(user4[0]);
console.log(user4[1]);


function consoleUser(user: [string, number, boolean?]) {
    if(user[2] !== undefined) {
        console.log(`Name: ${user[0]}, Age: ${user[1]}, Is married: ${user[2]}`)
    } else {
        console.log(`Name: ${user[0]}, Age: ${user[1]}`);
    }
}

let cally: [string, number, boolean] = ["Cally", 25, true];
let body: [string, number] = ["Body", 37];

consoleUser(cally);
consoleUser(body);


function consoleMarks(subj: [string, ...number[]]) {
    for(let num of subj) {
        console.log(num);
    }
}

let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
let physics: [string, ...number[]] = ["Physics", 5, 5, 5];

consoleMarks(math);
consoleMarks(physics);


let sam: [string, number, boolean] = ["Sam", 36, false];

let [username, userage, isMarried] = sam;

console.log(username);
console.log(userage);
console.log(isMarried);