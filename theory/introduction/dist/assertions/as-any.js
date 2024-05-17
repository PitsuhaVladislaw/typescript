"use strict";
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
var dataC = "123";
var stringValueC = dataC;
console.log(stringValueC.toUpperCase());
var objC = { name: "Alice", age: 30 };
var personC = objC;
console.log(personC.name, personC.age);
function processValueC(value) {
    if (typeof value === 'number') {
        var squareValue = Math.pow(value, 2);
        console.log("Square of ".concat(value, " is ").concat(squareValue));
    }
    else if (typeof value === 'string') {
        var upperValue = value.toUpperCase();
        console.log("Uppercase value: ".concat(upperValue));
    }
    else {
        console.log("Unsupported value type");
    }
}
processValueC(5); // Выводит "Square of 5 is 25"
processValueC("hello"); // Выводит "Uppercase value: HELLO"
processValueC(true); // Выводит "Unsupported value type"
