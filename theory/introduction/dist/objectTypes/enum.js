"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
var playerDirection = Direction.Up;
console.log(playerDirection);
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 0] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 1] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 2] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 3] = "Thursday";
    WeekDay[WeekDay["Friday"] = 4] = "Friday";
    WeekDay[WeekDay["Saturday"] = 5] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 6] = "Sunday";
})(WeekDay || (WeekDay = {}));
var today = WeekDay.Wednesday;
console.log(today);
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 0] = "Inactive";
})(Status || (Status = {}));
var userStatus = Status.Active;
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
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "INFO";
    LogLevel["Warning"] = "WARNING";
    LogLevel["Error"] = "ERROR";
})(LogLevel || (LogLevel = {}));
var logLevel = LogLevel.Error;
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
