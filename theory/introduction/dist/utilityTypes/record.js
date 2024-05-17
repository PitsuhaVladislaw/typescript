"use strict";
var _a;
var colorsBlock = {
    1: "red",
    2: "green",
    3: "blue"
};
var prices = {
    apple: 2,
    banana: 3,
    orange: 1
};
var personRecord = {
    name: "Jime",
    age: "30"
};
var permissions = {
    read: true,
    write: false,
    delete: true
};
var productsList = {
    1: { id: 1, name: "Laptop", price: 1000 },
    2: { id: 2, name: "Phone", price: 500 },
    3: { id: 3, name: "Tablet", price: 700 }
};
function displayProductInfo(product) {
    console.log("Product ID: ".concat(product.id));
    console.log("Product Name: ".concat(product.name));
    console.log("Product Price: $".concat(product.price));
}
Object.values(productsList).forEach(function (product) {
    displayProductInfo(product);
});
var ColorsRec;
(function (ColorsRec) {
    ColorsRec["RED"] = "red";
    ColorsRec["GREEN"] = "green";
    ColorsRec["BLUE"] = "blue";
})(ColorsRec || (ColorsRec = {}));
var colorFlags = (_a = {},
    _a[ColorsRec.RED] = true,
    _a[ColorsRec.GREEN] = false,
    _a[ColorsRec.BLUE] = true,
    _a);
var eventListeners = {
    click: function () {
        console.log("Button clicked");
    },
    hover: function () {
        console.log("Mouse hovered");
    }
};
var productsDet = {
    1: { name: "Laptop", price: 1000 },
    2: { name: "Phone", price: 400 }
};
