let num: number = 10;
console.log(typeof num);


let str2: string = "Hello";
console.log(typeof str2);


let isTrue: boolean = true;
console.log(typeof isTrue);


let obj3: object = { name: "John", age: 25 };
console.log(typeof obj3);


function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

console.log(typeof greet);



function checkType(data: any): void {
    console.log(`The data "${data}" is of type: ${typeof data}`);
}

checkType(10);
checkType("Hello");
checkType(true);
checkType({ name: "Alice", age: 30 });
checkType([1, 2, 3]);
checkType(null);