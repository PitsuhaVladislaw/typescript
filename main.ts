/*
    type TypeChannelReturn = {
        name: string
    }

    function getChannel(name: string):TypeChannelReturn {
        return { name }
    }

    getChannel('Read');
*/

type TypeChannelReturn = {
    name: string
}

function getChannel(name: string): TypeChannelReturn {
    return {name}
}

type TypeChannelFunction = (name: string) => TypeChannelReturn

const getChannelReturn:TypeChannelFunction = (name) => {
    return { name }
}

const getNumbers = (...numbers: number[]) => {
    return numbers;
}

//* overload

function getCar(name: string):string
function getCar(name: string, price: number):string

function getCar(name: string, price?: number):string {
    return price ? `Name: ${name}, Price: ${price}` : `Name: ${name}` 
}

const car1 = getCar("BMW")
const car2 = getCar("Mercedes", 1000000);
const car3 = getCar("Lada", 20000);

//* Book