declare global {
    interface String {
        capitalize(): string;
    }
}

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log("hello".capitalize());


declare global {
    interface Array<T> {
        sum(): number;
    }
}

Array.prototype.sum = function () {
    return this.reduce((acc, curr) => acc + curr, 0);
};

console.log([1, 2, 3, 4].sum());


declare global {
    interface Date {
        getFormattedDate(): string;
    }
}

Date.prototype.getFormattedDate = function () {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return this.toLocaleDateString(undefined, options);
};

console.log(new Date().getFormattedDate());


declare global {
    interface Object {
        isEmpty(): boolean;
    }
}

Object.prototype.isEmpty = function () {
    return Object.keys(this).length === 0;
};

console.log({}.isEmpty());
console.log({ name: "John" }.isEmpty());
