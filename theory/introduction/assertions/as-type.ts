let valueExap: any = "Hello"

let lengthExap: number = (valueExap as string).length;
let strValue: string  = valueExap as string 

console.log(valueExap);
console.log(lengthExap);
console.log(strValue);


let dataNum: any = "123";
let stringValue: string = dataNum as string;

console.log(stringValue.toUpperCase());


let objEx: any = {
    name: "Persi",
    age: 24
}

let personObj: {
    name: string,
    age: number
} = objEx as {name: string, age: 23};

console.log(personObj.name, personObj.age);


let valueArr: any[] = [1, "two", true];
let firstVal: number = (valueArr[0] as number);

console.log(firstVal);


function processValueEx(value: any): void {
    if(typeof value === 'number') {
        let squareValue: number  = (value as number) ** 2;

        console.log(`Square of ${value} is ${squareValue}`);
    } else if(typeof value === 'string') {
        let lowerValue: string = (value as string).toLowerCase();

        console.log("LowerCase value: " + lowerValue);
    } else {
        console.log("Unsupported value type");
    }
}

processValueEx(5);
processValueEx("What up, guys");
processValueEx(true);