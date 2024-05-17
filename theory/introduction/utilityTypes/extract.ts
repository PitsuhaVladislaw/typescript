type FruitEx = 'Apple' | 'Banana' | 'Orange' | 'Grape';
type CitrusEx = 'Orange' | 'Lemon';

type CitrusFruit = Extract<FruitEx, CitrusEx>



type AnimalEx = 'Dog' | 'Cat' | 'Bird' | 'Fish';
type PetEx = 'Dog' | 'Cat';

type PetAnimalEx = Extract<AnimalEx, PetEx>;



type ShapeEx = 'Circle' | 'Square' | 'Triangle' | 'Rectangle';
type Quadrilateral = 'Square' | 'Rectangle';

type QuadrilateralShape = Extract<ShapeEx, Quadrilateral>;



type ColorEx = 'Red' | 'Green' | 'Blue' | 'Yellow';
type PrimaryColor = 'Red' | 'Blue';

type PrimaryColorsEx = Extract<ColorEx, PrimaryColor>;



type VehicleEx = 'Car' | 'Bus' | 'Bicycle' | 'Motorcycle';
type Motorized = 'Car' | 'Motorcycle';

type MotorcycleVehicles = Extract<VehicleEx, Motorized>;

function displayMotorizedVehicles(vehicles: MotorcycleVehicles[]): void {
    vehicles.forEach(vehicle => {
        console.log(`Motorized vehicle ${vehicle}`)
    })
}

const motorizedList: MotorcycleVehicles[] = ['Car', 'Motorcycle'];
displayMotorizedVehicles(motorizedList);