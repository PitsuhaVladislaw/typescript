/*
    let fitstName : string = "";
    fitstName = "Max";


    let entity:number
    entity = 1

    let any:any;
    any = 23;

    () => console.log('evg')

    type TypeUser = {
        name: string
        age: number
        address: string
    }

    let user:TypeUser;

    user = {
        address: 'SPB',
        age: 25,
        name: "Max"
    }
*/

type TypeUser = {
    name: string
    age: number
}

type TypeAddress = {
    city: string
    country: string
}

const user:TypeUser = {
    age: 24,
    name: "Nike"
}

const address:TypeAddress = {
    city: "Warsaw",
    country: "Poland"
}

/*
    const common = {
        ...address, ...user
    }
*/

let common:TypeUser & TypeAddress;

common = {
    ...address, 
    ...user
}

//* Book