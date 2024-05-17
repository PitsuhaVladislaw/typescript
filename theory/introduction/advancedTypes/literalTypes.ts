let statusD: 'active' | 'inactive';

statusD = 'active';
//statusD = 'pending';



let resultLT: 200 | 405 | 500;

resultLT = 200;
//resultLT = 340;



type DirectionD = 'left' | 'right' | 'up' | 'down';

function move(direction: DirectionD) {
    console.log(`Moving ${direction}`)
}

move('down');
move('right');
//move('diagnol');



type YesNo = true | false;

let answer: YesNo = true;
//let flag: YesNo = 'yes';



function greetDD(name: string = 'Guest') {
    console.log(`Hello, ${name}`);
}

greetDD();
greetDD('Alice');



type StatusDD = 'active' | 'inactive';
let userStatusDD: StatusDD = 'active';

type HTTPCode = 200 | 404 | 500;
function handleResponce(code: HTTPCode) {
    console.log(`Handling response with code: ${code}`)
}

handleResponce(200);
//handleResponce(403);