enum Season {Winter, Spring, Summer, Autumn};
let current: Season = Season.Summer;
console.log(current);

current = Season.Autumn;
console.log(current);

enum pastSeason { Winter=0, Spring=1, Summer=2, Autumn=3 };

let curr: string = pastSeason[1];
console.log(curr);

curr = pastSeason[2];
console.log(curr);


enum DayTime { 
    Morning, 
    Evening
};

function welcome(dayTime: DayTime){
    if(dayTime === DayTime.Morning){
        console.log("Доброе утро");
    }
    else{
        console.log("Добрый вечер");
    }
}

let current1: DayTime = DayTime.Morning;
welcome(current1);
welcome(DayTime.Evening);