function addNum(firstNum) {
    var numberArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numberArray[_i - 1] = arguments[_i];
    }
    var result = firstNum;
    for (var i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }
    return result;
}
var nums1 = addNum(7, 8, 9);
console.log(nums1);
var nums2 = addNum(8, 9, 12, 45);
console.log(nums2);
var sumNum = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
};
var numbers = [3, 5, 6, 9, 12];
var num = sumNum.apply(void 0, numbers);
console.log(num);
function sumEl(a, b, c) {
    var result = a + b;
    if (c !== undefined) {
        result += c;
    }
    return result;
}
var numbers1 = [1, 3];
var numb1 = sumEl.apply(void 0, numbers1);
console.log(numb1);
var numbers2 = [1, 3, 7];
var numb2 = sumEl.apply(void 0, numbers2);
console.log(numb2);
function privateValues(name, age) {
    console.log(name);
    console.log(age);
}
var values = ["Tom", 25];
privateValues.apply(void 0, values);
