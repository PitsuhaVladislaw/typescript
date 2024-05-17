type Numbers = 1 | 2 | 3 | 4 | 5;
type EvenNumbers = 2 | 4

type OddNumbers = Exclude<Numbers, EvenNumbers>



type ColorsEx = 'Red' | 'Green' | 'Blue' | 'Yellow';
type PrimaryColors = 'Red' | 'Blue';

type NonPrimaryColors = Exclude<ColorsEx, PrimaryColors>;



type Animals = 'Dog' | 'Cat' | 'Bird' | 'Fish';
type Pets = 'Dog' | 'Cat';

type WildAnimals = Exclude<Animals, Pets>;



type Languages = 'JavaScript' | 'TypeScript' | 'Python' | 'Java';
type FrontendLanguages = 'JavaScript' | 'TypeScript';

type BackendLanguages = Exclude<Languages, FrontendLanguages>;



type Seasons = 'Spring' | 'Summer' | 'Autumn' | 'Winter';
type WarmSeasons = 'Spring' | 'Summer';

type ColdSeasons = Exclude<Seasons, WarmSeasons>;



type FoodGroups = 'Fruits' | 'Vegetables' | 'Grains' | 'Dairy' | 'Protein';
type HealthyFoods = 'Fruits' | 'Vegetables' | 'Grains';

type UnhealthyFoods = Exclude<FoodGroups, HealthyFoods>;

function classifyFood(food: FoodGroups): void {
    if (food === 'Fruits' || food === 'Vegetables' || food === 'Grains') {
        console.log(`${food} are healthy foods.`);
    } else {
        console.log(`${food} are unhealthy foods.`);
    }
}

classifyFood('Fruits');
classifyFood('Dairy');