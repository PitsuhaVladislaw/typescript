type NumberArray = Array<number>;
const numberssD: NumberArray = [1, 2, 3, 4, 5]
console.log(numberssD);



type PairG<T, U> = {
    first: T;
    second: U;
}

const pairG: PairG <string, number> = {first: "hello", second: 123}
console.log(pairG);



type Callback<T> = (value: T) => void;

function processValueG<T>(value: T, callback: Callback<T>): void {
    callback(value);
}

processValueG(10, (num) => {
    console.log(`Received number: ${num}`);
})



type DictionaryG<T> = {
    [key: string]: T;
};

const dataG: DictionaryG<number> = {
    'one': 1,
    'two': 2,
    'three': 3,
};

console.log(dataG['two']);



class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }
}

const numberBoxG = new Box<number>(10);
console.log(numberBoxG.getItem());



function printPair<T, U>(first: T, second: U): void {
    console.log(`Pair: ${first}, ${second}`);
}

printPair<string, number>('Hello', 123);



type PersonGG = {name: string; age: number}
type PeopleArray<T> = Array<T>;

const people: PeopleArray<PersonGG> = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
];

console.log(people);



type PairGG <T, U> = {
    first: T;
    second: U;
}

class PairProcessorG<T, U> {
    processPair(pair: PairGG<T, U>): void {
        console.log(`Processing pair: ${pair.first}, ${pair.second}`);
    }
}

const pairProcessor = new PairProcessorG<string, number>();
const pairGG: PairGG<string, number> = { first: 'typescript', second: 4}
pairProcessor.processPair(pairG);