var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
;
var current = Season.Summer;
console.log(current);
current = Season.Autumn;
console.log(current);
var pastSeason;
(function (pastSeason) {
    pastSeason[pastSeason["Winter"] = 0] = "Winter";
    pastSeason[pastSeason["Spring"] = 1] = "Spring";
    pastSeason[pastSeason["Summer"] = 2] = "Summer";
    pastSeason[pastSeason["Autumn"] = 3] = "Autumn";
})(pastSeason || (pastSeason = {}));
;
var curr = pastSeason[1];
console.log(curr);
curr = pastSeason[2];
console.log(curr);
var DayTime;
(function (DayTime) {
    DayTime[DayTime["Morning"] = 0] = "Morning";
    DayTime[DayTime["Evening"] = 1] = "Evening";
})(DayTime || (DayTime = {}));
;
function welcome(dayTime) {
    if (dayTime === DayTime.Morning) {
        console.log("Доброе утро");
    }
    else {
        console.log("Добрый вечер");
    }
}
var current1 = DayTime.Morning;
welcome(current1);
welcome(DayTime.Evening);
