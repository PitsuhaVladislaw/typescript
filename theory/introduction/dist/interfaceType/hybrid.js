"use strict";
function createCounterHI() {
    var count = 0;
    var counter = function (start) {
        count = start;
        return "Counter set to ".concat(count);
    };
    counter.interval = 10;
    counter.reset = function () {
        count = 0;
    };
    return counter;
}
var myCounterHI = createCounterHI();
console.log(myCounterHI(5));
console.log(myCounterHI.interval);
myCounterHI.reset();
console.log(myCounterHI(0));
function createUserHI(name) {
    var isLoggedIn = false;
    return {
        name: name,
        login: function () {
            isLoggedIn = true;
        },
        logout: function () {
            isLoggedIn = false;
        }
    };
}
var userAdmin = createUserHI("Alice");
userAdmin.login();
console.log(userAdmin.name);
userAdmin.logout();
var productHI = {
    name: "Laptop",
    price: 1000,
    calculateTotal: function (quantity) {
        return this.price * quantity;
    }
};
console.log(productHI.calculateTotal(2));
var myCarHI = {
    brand: "Toyota",
    startEngine: function () {
        console.log("Engine started");
    },
    stopEngine: function () {
        console.log("Engine stopped");
    },
    speed: 0
};
myCarHI.startEngine();
console.log(myCarHI.brand);
function createCircleHI(raduis) {
    return {
        color: "red",
        raduis: raduis,
        area: function () {
            return Math.PI * Math.pow(this.raduis, 2);
        }
    };
}
function createSquareHI(sideLength) {
    return {
        color: "blue",
        sideLength: sideLength,
        area: function () {
            return Math.pow(this.sideLength, 2);
        }
    };
}
var myCircleHI = createCircleHI(5);
console.log(myCircleHI.color);
console.log(myCircleHI.area());
var mySquareHI = createSquareHI(4);
console.log(mySquareHI.color);
console.log(mySquareHI.area());
