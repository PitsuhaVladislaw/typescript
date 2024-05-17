type TypeIsNumber<G> = G extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>


type TypeBrand = 'bmw' | 'mclaren' | 'mercedes'
type TypePrice = '$100000' | '$250000' | '$170000'

type TypeCar = `${TypeBrand} ${TypePrice}`

const car1: TypeCar = 'bmw $170000'
const car2: TypeCar = 'mclaren $250000'
const car3: TypeCar = 'mercedes $100000'


//* Book