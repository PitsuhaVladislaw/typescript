function sayHello(): void {
    console.log("Hello!");
}

function calculateSum(a: number, b: number): void {
    const sum = a + b;
    console.log("Sum:", sum);
}

class Printer {
    print(message: string): void {
        console.log("Message:", message);
    }
}

function fetchData2(callback: () => void): void {
    // Логика получения данных
    callback();
}

function logMessage(message: string): void {
    console.log(message);
}

logMessage("Привет, мир!"); // Выводит "Привет, мир!" в консоль

class Logger {
    logMessage(message: string): void {
        console.log(message);
    }
}

const logger = new Logger();
logger.logMessage("Привет, мир!"); // Выводит "Привет, мир!" в консоль

function fetchData(callback: () => void): void {
    // Логика получения данных
    callback();
}

function processData(): void {
    console.log("Данные обработаны");
}

fetchData(processData); // Выводит "Данные обработаны" в консоль