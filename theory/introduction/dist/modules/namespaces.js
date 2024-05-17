"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shapes;
(function (Shapes) {
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        Circle.prototype.getArea = function () {
            return Math.PI * Math.pow(this.radius, 2);
        };
        return Circle;
    }());
    Shapes.Circle = Circle;
})(Shapes || (Shapes = {}));
var myCircleNS = new Shapes.Circle(5);
console.log(myCircleNS.getArea());
var accountNS = {
    name: 'Alice',
    age: 30
};
var productNS = {
    name: 'Phone',
    price: 300
};
var OuterNamespace;
(function (OuterNamespace) {
    var InnerNamespave;
    (function (InnerNamespave) {
        var MyClass = /** @class */ (function () {
            function MyClass() {
            }
            MyClass.prototype.sayHello = function () {
                console.log('Hello from InnerNamespace');
            };
            return MyClass;
        }());
        InnerNamespave.MyClass = MyClass;
    })(InnerNamespave = OuterNamespace.InnerNamespave || (OuterNamespace.InnerNamespave = {}));
})(OuterNamespace || (OuterNamespace = {}));
var objNS = new OuterNamespace.InnerNamespave.MyClass();
objNS.sayHello();
var MathFunctioms;
(function (MathFunctioms) {
    function sum(a, b) {
        return a + b;
    }
    MathFunctioms.sum = sum;
    function multiply(a, b) {
        return a * b;
    }
    MathFunctioms.multiply = multiply;
})(MathFunctioms || (MathFunctioms = {}));
console.log(MathFunctioms.sum(2, 5));
console.log(MathFunctioms.multiply(2, 3));
var contacts_1 = require("./contacts/contacts");
console.log(contacts_1.Constants.PI);
console.log(contacts_1.Constants.GRAVITY);
var Geometry;
(function (Geometry) {
    var Circle = /** @class */ (function () {
        function Circle(raduis) {
            this.raduis = raduis;
        }
        Circle.prototype.getArea = function () {
            return Math.PI * Math.pow(this.raduis, 2);
        };
        return Circle;
    }());
    Geometry.Circle = Circle;
    var Rectangle = /** @class */ (function () {
        function Rectangle(width, height) {
            this.width = width;
            this.height = height;
        }
        Rectangle.prototype.getArea = function () {
            return this.width * this.height;
        };
        return Rectangle;
    }());
    Geometry.Rectangle = Rectangle;
})(Geometry || (Geometry = {}));
var circle = new Geometry.Circle(5);
var rectangle = new Geometry.Rectangle(3, 4);
console.log(circle.getArea());
console.log(rectangle.getArea());
