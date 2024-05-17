let value: any;
value = 10;
value = "Hello"
value = true


let data: any = 100;
console.log(data.toFixed(2))

data = "200"
console.log(data.toUpperCase())


let data1: any;
data1 = 10;
console.log(data1);

data1 = "Hello";
console.log(data1);


let items: any[] = [1, "data", true];
console.log(items);

function processDate(data: any): void {
    if(typeof data === 'number') {
        console.log(`Received number: ${data}`);
    } else if(typeof data === 'string') {
        console.log(`Received string: ${data}`);
    } else {
        console.log(`Received data of type: ${typeof data}`);
    }
}

processDate(items[0]);
processDate(items[1]);
processDate(items[2]);