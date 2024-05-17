let valueN: number = 19;

if(valueN) {
    console.log(true)
} else {
    console.log(false);
}

let valueZ: number = 0;

if (valueZ) {
    console.log("Значение истинно.");
} else {
    console.log("Значение ложно.");
}


let text: string = '';

if (text) {
    console.log("Строка не пустая.");
} else {
    console.log("Строка пустая.");
}


let isValid: boolean = false;

if (isValid) {
    console.log("Значение истинно.");
} else {
    console.log("Значение ложно.");
}


/*
let valueNum: number;

if (valueNum) {
    console.log("Значение истинно.");
} else {
    console.log("Значение ложно.");
}
*/



function checkTruthy(value: any): void {
    if(value) {
        console.log(`$${value} - is true`);
    } else {
        console.log(`${value} - is false`);
    }
}

checkTruthy(10);
checkTruthy(0);
checkTruthy('Hello');
checkTruthy('');
checkTruthy(true);
checkTruthy(false);
checkTruthy(null);
checkTruthy(undefined);