"use strict";
var numberssD = [1, 2, 3, 4, 5];
console.log(numberssD);
var pairG = { first: "hello", second: 123 };
console.log(pairG);
function processValueG(value, callback) {
    callback(value);
}
processValueG(10, function (num) {
    console.log("Received number: ".concat(num));
});
var dataG = {
    'one': 1,
    'two': 2,
    'three': 3,
};
console.log(dataG['two']);
var Box = /** @class */ (function () {
    function Box(item) {
        this.item = item;
    }
    Box.prototype.getItem = function () {
        return this.item;
    };
    return Box;
}());
var numberBoxG = new Box(10);
console.log(numberBoxG.getItem());
function printPair(first, second) {
    console.log("Pair: ".concat(first, ", ").concat(second));
}
printPair('Hello', 123);
var people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
];
console.log(people);
var PairProcessorG = /** @class */ (function () {
    function PairProcessorG() {
    }
    PairProcessorG.prototype.processPair = function (pair) {
        console.log("Processing pair: ".concat(pair.first, ", ").concat(pair.second));
    };
    return PairProcessorG;
}());
var pairProcessor = new PairProcessorG();
var pairGG = { first: 'typescript', second: 4 };
pairProcessor.processPair(pairG);
