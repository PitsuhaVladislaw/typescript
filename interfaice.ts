/*
*/

interface IUserAge {
    age: number
}

interface IUser extends IUserAge {
    name: string
    email: string
} 

type TypePerson = {
    age: number
}

type TypeUser = {
    name: string
    email: string
} & TypePerson

const user: IUser = {
    name: "Max",
    email: "max24@gmail.com",
    age: 25
}

//const users: IUser[] = [user, {
//    age: 25
//}]

//*Book