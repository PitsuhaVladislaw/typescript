"use strict";
function classifyFood(food) {
    if (food === 'Fruits' || food === 'Vegetables' || food === 'Grains') {
        console.log("".concat(food, " are healthy foods."));
    }
    else {
        console.log("".concat(food, " are unhealthy foods."));
    }
}
classifyFood('Fruits');
classifyFood('Dairy');
