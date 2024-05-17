let tuple: [string, number] = ["Milk", 100];

console.log(tuple[0], tuple[1]);


function TupleFun(): [string, number] {
    return ["Milk", 100];
}

console.log(TupleFun());


function TuoleFunLike(): {
    name: string, price: number
} {
    return {
        name: "Milk",
        price: 100
    }
}

console.log(TuoleFunLike().name);
console.log(TuoleFunLike().price);