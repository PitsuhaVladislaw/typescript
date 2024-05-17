interface PersonPP {
    name: string;
    age: number;
    city: string;
}

type PersonInfo = Pick<PersonPP, 'name' | 'age'>;

const personInfo: PersonInfo = {
    name: 'Alice',
    age: 30
}

console.log(personInfo);



type CarPP = {
    make: string;
    model: string;
    year: number;
    color: string;
}

type CarSumary = Pick<CarPP, 'make' | 'model'>;

const carSummary: CarSumary = {
    make: ' Toyota',
    model: 'Camry'
}

console.log(carSummary);



interface AnimalPP {
    species: string;
    habitat: string;
    sound: string;
    lifespan: number;
}

type AnimalDerails = Pick<AnimalPP, 'species' | 'habitat' | 'lifespan'>

function displayAnimalDetails(animal: AnimalDerails): void {
    console.log('Animal Details:');
    console.log(`Species: ${animal.species}`);
    console.log(`Habitat: ${animal.habitat}`);
    console.log(`Lifespan: ${animal.lifespan} years`);
}

const lionA: AnimalPP = {
    species: 'Lion',
    habitat: 'Savannah',
    sound: 'Roar',
    lifespan: 10
};

const lionADetailts: AnimalDerails = {
    species: lionA.species,
    habitat: lionA.habitat,
    lifespan: lionA.lifespan
}

displayAnimalDetails(lionADetailts);