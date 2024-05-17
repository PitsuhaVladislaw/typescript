"use strict";
var x;
console.log(x); // undefined
function doSomething() {
    console.log("Doing something");
}
console.log(doSomething()); // undefined
var y = undefined;
console.log(y); // undefined
var z;
if (z === undefined) {
    console.log("Variable z is undefined");
}
else {
    console.log("Variable z has a value");
}
/*
function getUser(): User | undefined {
    /// Логика получения пользователя
    if (userExists) {
        return user;
    } else {
        return undefined;
    }
}
*/
function greet(name) {
    if (name === undefined) {
        console.log("Hello!");
    }
    else {
        console.log("Hello, " + name + "!");
    }
}
greet(); // Hello!
greet("John"); // Hello, John!
var UserManagers = /** @class */ (function () {
    function UserManagers() {
        this.users = [];
    }
    UserManagers.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserManagers.prototype.getUserById = function (id) {
        return this.users.find(function (user) { return user.id === id; });
    };
    return UserManagers;
}());
var userManagers = new UserManager();
userManager.addUser({ id: 1, name: "John", email: "john@example.com" });
userManager.addUser({ id: 2, name: "Alice", email: "alice@example.com" });
var user = userManager.getUserById(1);
if (user === undefined) {
    console.log("User not found");
}
else {
    console.log("User found:", user);
}
