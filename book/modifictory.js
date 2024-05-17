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
var Person5 = /** @class */ (function () {
    function Person5(name, age) {
        this._name = name;
        this._year = this.setYear(age);
    }
    Person5.prototype.print = function () {
        console.log("\u0418\u043C\u044F: ".concat(this._name, "  \u0413\u043E\u0434 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(this._year));
    };
    Person5.prototype.setYear = function (age) {
        return new Date().getFullYear() - age;
    };
    return Person5;
}());
var tom3 = new Person5("Tom", 24);
tom3.print();
var Person6 = /** @class */ (function () {
    function Person6(name, age) {
        this.name = name;
        this.year = this.setYear(age);
    }
    Person6.prototype.printPerson = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.year));
    };
    Person6.prototype.setYear = function (age) {
        return new Date().getFullYear() - age;
    };
    return Person6;
}());
var Employee5 = /** @class */ (function (_super) {
    __extends(Employee5, _super);
    function Employee5(name, age, company) {
        var _this = _super.call(this, name, age) || this;
        _this.company = company;
        return _this;
    }
    Employee5.prototype.printEmployee = function () {
        this.printPerson();
        console.log("Company: ".concat(this.company));
    };
    return Employee5;
}(Person6));
var connor = new Employee5("Connor", 27, "Google");
connor.printEmployee();
