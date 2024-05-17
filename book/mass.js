var list = [10, 20, 35];
var colors = ["green", "blue", "red"];
console.log(list[0]);
console.log(colors[1]);
var names = ["Tom", "Marya", "Kate"];
console.log(names);
var people = ["Tom", "Bob", "Sam"];
//people[1] = "Kate";
console.log(people[1]);
function printUsers(users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log(user);
    }
}
function userToString(users) {
    return users.join(", ");
}
var users = ["Kevin", "Bron", "Red"];
printUsers(users);
console.log(userToString(users));
var gamers = ["Buster", "Marmok", "Kreosan"];
var first = gamers[0], other = gamers.slice(1);
console.log(first);
console.log(other);
console.log(other[1]);
console.log(other[0]);
