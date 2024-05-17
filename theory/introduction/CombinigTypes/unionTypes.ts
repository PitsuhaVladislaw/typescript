let result: number | string;

result = 10;
console.log(result);

result = 'hello';
console.log(result);


function printId(id: number | string) {
    console.log(`ID: ${id}`);
}

printId(100);
printId("abc");


interface Cars {
    brand: string;
    model: string;
    year: number | string;
}

let myCar: Cars = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
}

console.log(myCar);


function displayyValue(value: number | string) {
    if(typeof value === "number") {
        console.log(`Value is a number: ${value}`);
    } else {
        console.log(`Value is a string: ${value}`);
    }
}

displayyValue(25);
displayyValue("abc");


let itemss: (number | string)[] = [1, "two", 3, "four"];
console.log(itemss);



type Result = number | string;

function processResult(result: Result) {
    if(typeof result === 'number') {
        console.log(`Result is a number: ${result}`);
    } else {
        console.log(`Result is a string: ${result}`);
    }
}

processResult(123);
processResult("Success");