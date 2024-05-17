var tuple = ["Milk", 100];
console.log(tuple[0], tuple[1]);
function TupleFun() {
    return ["Milk", 100];
}
console.log(TupleFun());
function TuoleFunLike() {
    return {
        name: "Milk",
        price: 100
    };
}
console.log(TuoleFunLike().name);
console.log(TuoleFunLike().price);
