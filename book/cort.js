var user1 = ["Tom", 36];
console.log(user1[1]);
user1[1] = 37;
console.log(user1[1]);
var user2 = ["Tom", 36];
for (var _i = 0, user2_1 = user2; _i < user2_1.length; _i++) {
    var prop = user2_1[_i];
    console.log(prop);
}
function createUser(name, age) {
    return [name, age];
}
var user4 = createUser("Timmy", 26);
console.log(user4[0]);
console.log(user4[1]);
function consoleUser(user) {
    if (user[2] !== undefined) {
        console.log("Name: ".concat(user[0], ", Age: ").concat(user[1], ", Is married: ").concat(user[2]));
    }
    else {
        console.log("Name: ".concat(user[0], ", Age: ").concat(user[1]));
    }
}
var cally = ["Cally", 25, true];
var body = ["Body", 37];
consoleUser(cally);
consoleUser(body);
function consoleMarks(subj) {
    for (var _i = 0, subj_1 = subj; _i < subj_1.length; _i++) {
        var num = subj_1[_i];
        console.log(num);
    }
}
var math = ["Math", 5, 4, 5, 4, 4];
var physics = ["Physics", 5, 5, 5];
consoleMarks(math);
consoleMarks(physics);
var sam = ["Sam", 36, false];
var username = sam[0], userage = sam[1], isMarried = sam[2];
console.log(username);
console.log(userage);
console.log(isMarried);
