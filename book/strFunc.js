var summa = function (x, y) {
    x *= 2;
    return x + y;
};
var result = summa(15, 35); // 65
console.log(result);
function mathOp(x, y, operators) {
    var result = operators(x, y);
    return result;
}
var rest1 = mathOp(12, 23, function (x, y) { return x + y; });
console.log(rest1);
var rest2 = mathOp(15, 23, function (x, y) { return x * y; });
console.log(rest2);
