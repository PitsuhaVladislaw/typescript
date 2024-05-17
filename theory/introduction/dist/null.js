"use strict";
var UserManagerd = /** @class */ (function () {
    function UserManagerd() {
        this.users = [];
    }
    UserManagerd.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserManagerd.prototype.getUserByEmail = function (email) {
        var user = this.users.find(function (user) { return user.email === email; });
        return user ? user : null;
    };
    return UserManagerd;
}());
var userManagerd = new UserManager();
var userPer = userManager.getUserByEmail("john@example.com");
if (userPer !== null) {
    console.log("User found:", user);
}
else {
    console.log("User not found");
}
