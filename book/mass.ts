let list: number[] = [10, 20, 35];
let colors: string[] = ["green", "blue", "red"]

console.log(list[0]);
console.log(colors[1]);


let names: Array<string> = ["Tom", "Marya", "Kate"];
console.log(names);

const people: ReadonlyArray<string> = ["Tom", "Bob", "Sam"];
//people[1] = "Kate";
console.log(people[1]);


function printUsers(users: readonly string[]) {
    for(let user of users) {
        console.log(user);
    }
}

function userToString(users: ReadonlyArray<string>): String {
    return users.join(", ");
}

const users: readonly string[] = ["Kevin", "Bron", "Red"];

printUsers(users);
console.log(userToString(users));


const gamers: string[] = ["Buster", "Marmok", "Kreosan"];

let [first, ...other] = gamers;

console.log(first);
console.log(other);
console.log(other[1]);
console.log(other[0]);