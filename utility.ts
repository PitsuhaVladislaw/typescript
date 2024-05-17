//* Omit

interface ICar {
    id: number
    name: string
    price: number
    yearBuild: number
}

interface ICarCreate extends Omit<ICar, 'id'> {}

const car: ICarCreate = {
    name: "Belaz",
    price: 200000,
    yearBuild: 2020
}


//* Pick

interface ICarId extends Pick< ICar, 'id'> {}

const car2: ICarId = {
    id: 1234
}


//* Partial

interface IOptionalCar extends Partial<ICar> {}

const car3: IOptionalCar = {}


//* Readonly

interface IReadonly extends Readonly<ICar> {}

const car4: IReadonly = {
    id: 21442,
    name: 'dsfs',
    price: 200000,
    yearBuild: 2023
}


//* Record

type TypeCarPersonal = Record<"name" | "price", string | number>

const car5: TypeCarPersonal = {
    name: '24242',
    price: 'feffdfd'
}

//* 

interface IRequiredCar extends Required<ICar> {}

const car6: IOptionalCar = {}


//* ReturnType

type TypeGetName = () => string
type Return = ReturnType<TypeGetName>

const car7: IOptionalCar = {}


//* Extract

type Any = Extract<"max" | "andrey", "andrey" | "misha">


//* Exclude

type Some = Exclude<"max" | "andrey", "andrey" | "misha">

//* NonNullable

type Non = NonNullable<string | null | number | undefined>
