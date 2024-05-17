let id: string | number;
id = "1345dgg5";
console.log(id);

id = 12342;
console.log(id);


function printId(id: number|string){
    console.log(`Id: ${id}`);
}

let id1: string|number = "ruy74";

printId("1h2e3l4o5");
printId(9876);
printId(id1);


function printSentence(words: string[] | string) {
    if(typeof words === 'string') {
        console.log(words);
    } else {
        console.log(words.join(" "));
    }
}

printSentence(["Язык", "программирования", "TypeScript"]);
printSentence("Язык программирования JavaScript");