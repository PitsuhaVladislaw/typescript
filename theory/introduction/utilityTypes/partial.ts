interface UserP {
    name: string;
    age: number;
}

type PartialUser1 = Partial<UserP>

const partialUser1: PartialUser1 = {name: 'Alice'}
console.log(partialUser1);


type BookP = {
    title: string;
    author: string;
    pages: number;
}

type PartialBookF = Partial<BookP>;

const partialBook: PartialBookF = { title: 'TypeScript in Action' };
console.log(partialBook); // { title: 'TypeScript in Action' }



class Task {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean) {
        this.title = title;
        this.completed = completed;
    }
}

type PartialTaskD = Partial<Task>;

const partialTask: PartialTaskD = { title: 'Finish project' };
console.log(partialTask);



interface CarP {
    make: string;
    model: string;
    year: number;
    color: string;
}

type PartialCar1 = Partial<CarP>;

function displayCarInfoD(car: PartialCar1): void {
    console.log('Car Information: ');
    if(car.make) {
        console.log(`Make: ${car.make}`)
    }

    if (car.model) {
        console.log(`Model: ${car.model}`)
    }

    if (car.year) {
        console.log(`Year: ${car.year}`)
    }

    if (car.color) {
        console.log(`Color: ${car.color}`)
    }
}

const partialCar1: PartialCar1 = {make: 'Totota', model: 'Camry'}
displayCarInfoD(partialCar1);

const partialCar2: PartialCar1 = { make: 'Honda', year: 2020, color: 'Red' }
displayCarInfoD(partialCar2);