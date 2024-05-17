var id;
id = "1345dgg5";
console.log(id);
id = 12342;
console.log(id);
function printId(id) {
    console.log("Id: ".concat(id));
}
var id1 = "ruy74";
printId("1h2e3l4o5");
printId(9876);
printId(id1);
function printSentence(words) {
    if (typeof words === 'string') {
        console.log(words);
    }
    else {
        console.log(words.join(" "));
    }
}
printSentence(["Язык", "программирования", "TypeScript"]);
printSentence("Язык программирования JavaScript");
