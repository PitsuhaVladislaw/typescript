interface User {
    nameUser: string;
    age: number;
}

type PartialUser = Partial<User>;

const partialUser: PartialUser = {nameUser: ' Alice'}
console.log(partialUser);


type RequiredUser = Required<User>;

//const requiredUser: RequiredUser = {nameUser: 'Bob', age: 34};
//console.log(requiredUser);



type ReadonlyUser = Readonly<User>;

//const readonlyUser: ReadonlyUser = {nameUser: 'Charlie', age: 24}
//readonlyUser.age = 25;



type UsernameUser = Pick<User, 'nameUser'>;

const usernameUser: UsernameUser = {nameUser: 'David'};
console.log(usernameUser);



type UserWithoutAge = Omit<User, 'age'>;

//const userWithoutAge: UserWithoutAge = {nameUser: 'Eve'}
//console.log(userWithoutAge);



type UserRecord = Record<'id' | 'nameUser', string>;

const userRecord: UserRecord = {id: '001', nameUser: 'Frank'}
console.log(userRecord);



type NonStringsValues = Exclude <string | number | boolean, string>;

const nonStringValues: NonStringsValues = true;
console.log(nonStringValues);



interface ProductUt {
    id: number;
    nameUser: string;
    price: number;
}

type PartialProduct = Partial<ProductUt>
type RequiredProduct = Required<ProductUt>
type ReadonlyProduct = Readonly<ProductUt>
type ProductName = Pick<ProductUt, 'nameUser'>
type ProductwithoutPriceF = Omit<ProductUt, 'price'>
type ProductRecord = Record<'id' | 'nameUser', string>
type NonStringValues = Exclude<string | number | boolean, string>

const partialProduct: PartialProduct = { nameUser: 'Product A' };
const requiredProduct: RequiredProduct = { id: 1, nameUser: 'Product B', price: 10 };
const productName: ProductName = { nameUser: 'Product D' };
const productWithoutPrice: ProductwithoutPriceF = { id: 3, nameUser: 'Product E' };
const productRecord: ProductRecord = { id: '003', nameUser: 'Product F' };
const nonStringValuesF: NonStringValues = true;

console.log(partialProduct);
console.log(requiredProduct);
console.log(productName);
console.log(productWithoutPrice);
console.log(productRecord);
console.log(nonStringValuesF);