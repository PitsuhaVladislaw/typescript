"use strict";
var MyNamespace;
(function (MyNamespace) {
    function greetD() {
        console.log("Hello!");
    }
    MyNamespace.greetD = greetD;
})(MyNamespace || (MyNamespace = {}));
(function (MyNamespace) {
    MyNamespace.PI = 3.14;
})(MyNamespace || (MyNamespace = {}));
(function (MyNamespace) {
    MyNamespace.E = 2.71;
})(MyNamespace || (MyNamespace = {}));
console.log(MyNamespace.PI);
console.log(MyNamespace.E);
