"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userMT = { id: 1, name: "Alice" };
var carMT = { brand: 'Toyota' };
console.log(carMT);
var productMT = { id: 1, name: 'Phone', price: 500 };
console.log(productMT);
var pointMT = { x: '10', y: '10' };
console.log(pointMT);
function updateAccount(user, updateAccount) {
    return __assign(__assign({}, user), updateAccount);
}
var accoutMT = { id: 1, name: 'John', age: 23 };
var updatedAccount = updateAccount(accoutMT, { age: 31 });
console.log(updateAccount);
