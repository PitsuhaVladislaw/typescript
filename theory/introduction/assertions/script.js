const fs = require('fs');

function decode(messageFile) {
    const lines = fs.readFileSync(messageFile, 'utf-8').split('\n');

    const decodedWords = [];

    lines.forEach((line, index) => {
        const words = line.split(' ').slice(1);
        decodedWords.push(words[index]);
    });

    const decodedMessage = decodedWords.join(' ');
    return decodedMessage;
}

const decodedMessage = decode('./coding_qual_input.txt');
console.log(decodedMessage);
