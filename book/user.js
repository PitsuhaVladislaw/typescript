var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
var tom = new User("Tom");
var header = document.getElementById("header");
header.innerHTML = "Hello " + tom.name;
