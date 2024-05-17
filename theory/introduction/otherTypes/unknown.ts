let userInput: unknown;
let userName: string;

userInput = 5;
//userName = userInput;
if(typeof userInput === 'string') {
    userName = userInput
}


function processInput(input: unknown) {
    if(typeof input === 'string') {
        console.log(input.toUpperCase());
    } else {
        console.log('Input is not a string');
    }
}

processInput("hello");
processInput(10);


function getUserInfo(user: unknown): void {
    if(typeof user === 'object' && user !== null) {
        const {name, age} = user as {name: string, age: number}
        console.log(`User ${name}, Age ${age}`)
    } else {
        console.log("Invalid user data");
    }
}

const userData: unknown = { name: "Alice", age: 30 };
getUserInfo(userData); // Выводит "User: Alice, Age: 30"

const invalidData: unknown = "John";
getUserInfo(invalidData); // Выводит "Invalid user data"