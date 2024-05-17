"use strict";
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.getUserByEmail = function (arg0) {
        throw new Error("Method not implemented.");
    };
    UserManager.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserManager.prototype.findUserByEmail = function (email) {
        return this.users.find(function (user) {
            user.email === email;
        });
    };
    UserManager.prototype.getAverageAge = function () {
        var totalAge = this.users.reduce(function (sum, user) { return sum + user.age; }, 0);
        return totalAge / this.users.length;
    };
    return UserManager;
}());
var userManager = new UserManager();
//userManager.addUser({ id: 1, name: "John", email: "john@example.com", age: 25 });
//userManager.addUser({ id: 2, name: "Alice", email: "alice@example.com", age: 30 });
//userManager.addUser({ id: 3, name: "Bob", email: "bob@example.com", age: 35 });
var foundUser = userManager.findUserByEmail("alice@example.com");
if (foundUser) {
    console.log("The User is found");
    console.log(foundUser);
}
else {
    console.log("The User is not found");
    console.log(foundUser);
}
var averageAge = userManager.getAverageAge();
console.log(averageAge);
