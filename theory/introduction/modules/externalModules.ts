export const message: string = "Hello, World"


//import { message } from "./module1";
console.log(message);


import { Car } from "./global/car";

const myCar = new Car("Toyota");
myCar.start();


const API_URL: string = "https://api.example.com";

export function fetchData(endpoint: string): Promise<any> {
    return fetch(`${API_URL}/${endpoint}`)
        .then(response => response.json());
}

fetchData("users")
    .then(data => console.log(data))
    .catch(error => console.error(error));


    
let variable: any;
variable = 10;
console.log(variable);

variable = "Hello";
console.log(variable);

variable = true;
console.log(variable);


let array: any[] = [1, "two", true];
console.log(array);


function processInput(input: any): void {
    if (typeof input === 'number') {
        console.log(`Received number: ${input}`);
    } else if (typeof input === 'string') {
        console.log(`Received string: ${input}`);
    } else {
        console.log(`Received data of type: ${typeof input}`);
    }
}

processInput(42);
processInput("Hello");
processInput(true);