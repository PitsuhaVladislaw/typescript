function addNum(firstNum: number, ...numberArray: number[]) {
    let result =  firstNum;

    for(let i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }

    return result
}

let nums1 = addNum(7, 8, 9);
console.log(nums1)

let nums2 = addNum(8, 9, 12, 45);
console.log(nums2);


const sumNum = (...args: number[]) => {
    let result = 0;

    for(let i = 0; i < args.length; i++) {
        result += args[i];
    }

    return result;
}

const numbers = [3, 5, 6, 9, 12] as const;
let num = sumNum(...numbers);
console.log(num);


function sumEl(a: number, b: number, c?: number): number {
    let result = a + b;
    if(c !== undefined) {
        result += c;
    }

    return result;
}

const numbers1 = [1, 3] as const;
let numb1 = sumEl(...numbers1);
console.log(numb1);

const numbers2 = [1, 3, 7] as const;
let numb2 = sumEl(...numbers2);
console.log(numb2);


function privateValues(name: string, age: number) {
    console.log(name);
    console.log(age);
}

const values = ["Tom", 25] as const;
privateValues(...values);