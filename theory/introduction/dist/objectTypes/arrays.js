"use strict";
var numbers = [1, 2, 3, 4, 5];
var names = ["John", "Alice", "Bob"];
var numbersss = [1, 2, 3, 4, 5];
console.log(numbersss[0]); // Выводит 1
var numberss = [1, 2, 3, 4, 5];
console.log(numberss.length); // Выводит 5
var numbers4 = [1, 2, 3, 4, 5];
numbers4.push(6); // Добавляет элемент в конец массива
numbers4.pop(); // Удаляет последний элемент массива
numbers4.splice(2, 1); // Удаляет один элемент по индексу 2
var slicedArray = numbers4.slice(0, 3); // Создает новый массив из первых трех элементов
var numbers1 = [1, 2, 3, 4, 5];
numbers1.push(6); // Добавляет элемент в конец массива
numbers1.pop(); // Удаляет последний элемент массива
console.log(numbers1.length); // Выводит 5
var UsersManager = /** @class */ (function () {
    function UsersManager() {
        this.users = [];
    }
    UsersManager.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UsersManager.prototype.findUserByEmail = function (email) {
        return this.users.find(function (user) { return user.email === email; });
    };
    UsersManager.prototype.getUsersByAge = function (age) {
        return this.users.filter(function (user) { return user.age === age; });
    };
    return UsersManager;
}());
var usersManager = new UsersManager();
/*
usersManager.addUser({ id: 1, name: "John", email: "john@example.com" });
usersManager.addUser({ id: 2, name: "Alice", email: "alice@example.com" });
usersManager.addUser({ id: 3, name: "Bob", email: "bob@example.com" });
*/
var foundsUser = usersManager.findUserByEmail("alice@example.com");
if (foundUser) {
    console.log("User found:", foundUser);
}
else {
    console.log("User not found");
}
var usersWithAge25 = usersManager.getUsersByAge(25);
console.log("Users with age 25:", usersWithAge25);
