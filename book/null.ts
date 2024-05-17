let x : number = undefined;
console.log(x);

x = null;
console.log(null);

x = 5;
console.log(x);


let userId: number | null = null;

function printsId(id: number | null) {
    if(id === null) {
        console.log("none user")
    } else {
        console.log(`id user: ${id}`)
    }
}

printsId(userId);
userId = 45;
printsId(userId);


const headers: HTMLElement|null = document.getElementById("header");
headers!.innerText = "Hello Typescript!";


const header1: HTMLElement|null = null;
header1!.innerText = "Hello Typescript!";