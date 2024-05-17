var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = /** @class */ (function () {
    function Person1(userName) {
        this.name = userName;
    }
    Person1.prototype.print = function () {
        console.log("Name: ".concat(this.name));
    };
    return Person1;
}());
var Empolyee1 = /** @class */ (function (_super) {
    __extends(Empolyee1, _super);
    function Empolyee1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Empolyee1.prototype.work = function () {
        console.log("".concat(this.name, " \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ").concat(this.company));
    };
    return Empolyee1;
}(Person1));
var Person2 = /** @class */ (function () {
    function Person2(userName) {
        this.name = userName;
    }
    Person2.prototype.print = function () {
        console.log("\u0418\u043C\u044F: ".concat(this.name));
    };
    return Person2;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee2.prototype.work = function () {
        console.log("".concat(this.name, " \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ").concat(this.company));
    };
    return Employee2;
}(Person2));
var bob1 = new Employee2("Bob");
bob1.print();
bob1.company = "Microsoft";
bob1.work();
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    return Person3;
}());
var Employee3 = /** @class */ (function (_super) {
    __extends(Employee3, _super);
    function Employee3(name, company) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.company = company;
        return _this;
    }
    Employee3.prototype.work = function () {
        console.log("".concat(this.name, " \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ").concat(this.company));
    };
    return Employee3;
}(Person3));
var bob2 = new Employee3("Bob", "Microsoft");
bob2.work();
var Person4 = /** @class */ (function () {
    function Person4(name) {
        this.name = name;
    }
    Person4.prototype.print = function () {
        console.log("Name: ".concat(this.name));
    };
    return Person4;
}());
var Empolyee4 = /** @class */ (function (_super) {
    __extends(Empolyee4, _super);
    function Empolyee4(name, company) {
        var _this = _super.call(this, name) || this;
        _this.company = company;
        return _this;
    }
    Empolyee4.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438: ".concat(this.company));
    };
    return Empolyee4;
}(Person4));
var bob3 = new Empolyee4("Bob", "Google");
bob3.print();
