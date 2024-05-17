import * as fs from 'fs';

function decode(messageFile: string): string {
    const lines: string[] = fs.readFileSync(messageFile, 'utf-8').split('\n');

    const decodedWords: string[] = [];

    lines.forEach((line, index) => {
        const words: string[] = line.split(' ').slice(1);
        decodedWords.push(words[index]);
    });

    const decodedMessage: string = decodedWords.join(' ');
    return decodedMessage;
}

const decodedMessage: string = decode('./coding_qual_input.txt');
console.log(decodedMessage);