/*
async function fetchDataFromAPI(apiEndpoint) {
    try {
        const response = await fetch(apiEndpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

/// Пример использования
const apiEndpoint = "https://api.example.com/data";
fetchDataFromAPI(apiEndpoint)
    .then(data => {
        console.log("Data from API:", data);
        /// Обрабатываем полученные данные
    })
    .catch(error => {
        /// Обрабатываем ошибку при получении данных
    });


let dataVn: any = fetchDataFromAPI();
let processedData: any = processData(dataVn);
*/

let dataC: any = "123";
let stringValueC: string = dataC as any;
console.log(stringValueC.toUpperCase());

let objC: any = { name: "Alice", age: 30 };
let personC: { name: string, age: number } = objC as any;
console.log(personC.name, personC.age);

function processValueC(value: any): void {
    if (typeof value === 'number') {
        let squareValue: number = (value as any) ** 2;
        console.log(`Square of ${value} is ${squareValue}`);
    } else if (typeof value === 'string') {
        let upperValue: string = (value as any).toUpperCase();
        console.log(`Uppercase value: ${upperValue}`);
    } else {
        console.log("Unsupported value type");
    }
}

processValueC(5); // Выводит "Square of 5 is 25"
processValueC("hello"); // Выводит "Uppercase value: HELLO"
processValueC(true); // Выводит "Unsupported value type"