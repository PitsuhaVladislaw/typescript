var x = undefined;
console.log(x);
x = null;
console.log(null);
x = 5;
console.log(x);
var userId = null;
function printsId(id) {
    if (id === null) {
        console.log("none user");
    }
    else {
        console.log("id user: ".concat(id));
    }
}
printsId(userId);
userId = 45;
printsId(userId);
var headers = document.getElementById("header");
headers.innerText = "Hello Typescript!";
var header1 = null;
header1.innerText = "Hello Typescript!";
