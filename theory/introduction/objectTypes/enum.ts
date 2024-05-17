enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let playerDirection: Direction = Direction.Up;
console.log(playerDirection);


enum WeekDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

let today: WeekDay = WeekDay.Wednesday;
console.log(today);


enum Status {
    Active = 1,
    Inactive = 0
}

let userStatus: Status = Status.Active;
console.log(userStatus);

/*
enum Season {
    Spring,
    Summer,
    Autumn,
    Winter,
}

let currentSeason: Season = Season.Summer;

switch (currentSeason) {
    case Season.Spring:
        console.log("It's Spring!");
        break;
    case Season.Summer:
        console.log("It's Summer!");
        break;
    case Season.Autumn:
        console.log("It's Autumn!");
        break;
    case Season.Winter:
        console.log("It's Winter!");
        break;
}
*/


enum LogLevel {
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
}

let logLevel: LogLevel = LogLevel.Error;
console.log(logLevel); // Выводит "ERROR"

/*
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

interface Car {
    model: string;
    color: Color;
}

function paintCar(car: Car, newColor: Color): Car {
    return { ...car, color: newColor };
}

let myCar: Car = { model: "Toyota", color: Color.Red };
console.log(myCar); // Выводит { model: "Toyota", color: "RED" }

myCar = paintCar(myCar, Color.Blue);
console.log(myCar); // Выводит { model: "Toyota", color: "BLUE" }
*/