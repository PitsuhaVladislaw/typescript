"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function getArrayLength(arr) {
    return arr.length;
}
var numberS = [1, 2, 3, 4, 5];
var namesS = ["Alice", "Ban", "Bobi"];
console.log(getArrayLength(numberS));
console.log(getArrayLength(namesS));
var Pair = /** @class */ (function () {
    function Pair(first, second) {
        this.first = first;
        this.second = second;
    }
    return Pair;
}());
var pair1 = new Pair(10, 'Hello');
var pair2 = new Pair('typescript', true);
console.log(pair1);
console.log(pair2);
function mergeArrays(arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
var numbersS1 = [1, 2, 3];
var numbersS2 = [4, 5, 6];
console.log(mergeArrays(numbersS1, numbersS2));
function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
var fruits1 = ["banana", "apple", "orange", "straberry"];
//const fruits2 = [];
console.log(getArrayLength(fruits1));
var pair = {
    first: 10,
    second: 'Hello'
};
console.log(pair);
var Queue = /** @class */ (function () {
    function Queue() {
        this.elements = [];
    }
    Queue.prototype.enqueue = function (element) {
        this.elements.push(element);
    };
    Queue.prototype.dequeue = function () {
        return this.elements.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    return Queue;
}());
var numberQueue = new Queue();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
while (!numberQueue.isEmpty()) {
    console.log(numberQueue.dequeue());
}
var stringQueue = new Queue();
stringQueue.enqueue('Hello');
stringQueue.enqueue('World');
while (!stringQueue.isEmpty()) {
    console.log(stringQueue.dequeue());
}
