let tuple: [number, string,  boolean] = [10, "Hello", true];

let personAlice: [string, number] = ["Alice", 30];

let dataInfo: [number, string] = [1, "Two"];
console.log(dataInfo[0]);
console.log(dataInfo[1]);


let employee: [number, string, boolean] = [1, "Alice", true];

let tuples: [number, string, boolean] = [10, "Hello", true];
console.log(tuples); // Выводит [10, "Hello", true]


function getCoordinates(): [number, number] {
    return [40, 100]
}

let coordinates: [number, number] = getCoordinates();
console.log(coordinates);


let data2: [string, number, boolean] = ["Alice", 30, true];
console.log(data2); // Выводит ["Alice", 30, true]


let tuple3: [string, number] = ["Alice", 30];
tuple3[1] = 35;
console.log(tuple3); // Выводит ["Alice", 35]


let product: [string, number, boolean] = ["Футболка", 500, true];

console.log(`Название товара: ${product[0]}`);
console.log(`Цена товара: ${product[1]} $.`);
console.log(`Товар в наличии: ${product[2] ? "Да" : "Нет"}`);