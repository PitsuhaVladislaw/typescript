const summa = (x: number, y: number) => {
    x *= 2;
    return x + y;
};

const result = summa(15, 35); // 65
console.log(result);


function mathOp(x: number, y: number, operators: (a: number, b: number) => number) : number {
    const result = operators(x, y);
    return result;
}

let rest1 = mathOp(12, 23, (x, y) => x + y);
console.log(rest1);
let rest2 = mathOp(15, 23, (x, y) => x * y);
console.log(rest2);