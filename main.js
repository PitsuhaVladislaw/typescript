/*
    type TypeChannelReturn = {
        name: string
    }

    function getChannel(name: string):TypeChannelReturn {
        return { name }
    }

    getChannel('Read');
*/
function getChannel(name) {
    return { name: name };
}
var getChannelReturn = function (name) {
    return { name: name };
};
var getNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers;
};
function getCar(name, price) {
    return price ? "Name: ".concat(name, ", Price: ").concat(price) : "Name: ".concat(name);
}
var car1 = getCar("BMW");
var car2 = getCar("Mercedes", 1000000);
var car3 = getCar("Lada", 20000);
//* Book
