var User1 = /** @class */ (function () {
    function User1() {
    }
    return User1;
}());
var tommy = new User1();
tommy.name = "Tommy";
tommy.age = 23;
console.log("name: ".concat(tommy.name, ", age: ").concat(tommy.age));
var User2 = /** @class */ (function () {
    function User2() {
    }
    User2.prototype.print = function () {
        console.log("name: ".concat(this.name, ", age: ").concat(this.age));
    };
    User2.prototype.toString = function () {
        return "".concat(this.name, ", ").concat(this.age);
    };
    return User2;
}());
var User3 = /** @class */ (function () {
    function User3(userName, userAge) {
        this.name = userName;
        this.age = userAge;
    }
    User3.prototype.print = function () {
        console.log("name: ".concat(this.name, "  age: ").concat(this.age));
    };
    return User3;
}());
var tobby = new User3("Tobby", 36);
tobby.print();
var User4 = /** @class */ (function () {
    function User4(userName, userAge) {
        this.name = "Default user";
        this.name = userName;
        this.age = userAge;
    }
    User4.prototype.print = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return User4;
}());
var kira = new User4("Kira", 23);
kira.name = "Katy";
kira.print();
