var Person7 = /** @class */ (function () {
    function Person7() {
    }
    Object.defineProperty(Person7.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (n) {
            if (n < 0 || n > 110) {
                console.log("Недопустимый возраст!");
            }
            else {
                this._age = n;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person7;
}());
var tom4 = new Person7();
tom4.name = "Tom";
tom4.age = 36;
console.log(tom4.age); // 36
tom4.age = -1243; // Недопустимый возраст!   
console.log(tom4.age);
var User7 = /** @class */ (function () {
    function User7() {
    }
    Object.defineProperty(User7.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (n) {
            if (n < 0 || n > 100) {
                console.log("Fault..");
            }
            else {
                this._age = n;
            }
        },
        enumerable: false,
        configurable: true
    });
    return User7;
}());
var busia = new User7();
busia.name = "Busia";
busia.age = 18;
console.log(busia.age);
busia.age = -20;
console.log(busia.age);
