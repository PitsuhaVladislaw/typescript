"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function decode(messageFile) {
    var lines = fs.readFileSync(messageFile, 'utf-8').split('\n');
    var decodedWords = [];
    lines.forEach(function (line, index) {
        var words = line.split(' ').slice(1);
        decodedWords.push(words[index]);
    });
    var decodedMessage = decodedWords.join(' ');
    return decodedMessage;
}
var decodedMessage = decode('./coding_qual_input.txt');
console.log(decodedMessage);
