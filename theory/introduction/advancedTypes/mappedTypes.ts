interface UserMT {
    id: number;
    name: string;
}

type ReadonlyUserMT = {
    readonly [K in keyof UserMT]: UserMT[K];
}

const userMT: ReadonlyUserMT = {id: 1, name: "Alice"}
//userMT.id = 2;



interface CarMT {
    brand: string;
    model: string;
    year: number;
}

type OptionalCarMT = {
    [K in keyof CarMT]?: CarMT[K];
}

const carMT: OptionalCarMT = { brand: 'Toyota' };
console.log(carMT); 



interface ProductMT {
    id: number;
    name: string;
    price: number;
}

type ReadonlyProductMT = {
    [K in keyof ProductMT]: ProductMT[K];
}

const productMT: ReadonlyProductMT = {id: 1, name: 'Phone', price: 500}
console.log(productMT);



interface PointMT {
    x: number;
    y: number;
}

type PointStrings = {
    [K in keyof PointMT]: string;
}

const pointMT: PointStrings = {x: '10', y: '10'}
console.log(pointMT);



interface AccountMT {
    id: number;
    name: string;
    age: number;
}

type PartialAccount = {
    [K in keyof AccountMT]?: AccountMT[K];
}

function updateAccount(user: AccountMT, updateAccount: PartialAccount): AccountMT {
    return {...user, ...updateAccount}
}

const accoutMT: AccountMT = { id: 1, name: 'John', age: 23}
const updatedAccount = updateAccount(accoutMT, {age: 31});

console.log(updateAccount);