type Colors = Record<number, string>;

const colorsBlock: Colors = {
    1: "red",
    2: "green",
    3: "blue"
}



type Prices = Record<string, number>

const prices: Prices = {
    apple: 2,
    banana: 3,
    orange: 1
}



type PersonRec = Record<"name" | 'age', string>;

const personRecord: PersonRec = {
    name: "Jime",
    age: "30"
}



type UserRec = Record<string, boolean>;

const permissions: UserRec = {
    read: true,
    write: false,
    delete: true
}



type ProductRec = {
    id: number,
    name: string,
    price: number
}

type ProductList = Record<number, ProductRec>;

const productsList: ProductList = {
    1: { id: 1, name: "Laptop", price: 1000 },
    2: { id: 2, name: "Phone", price: 500 },
    3: { id: 3, name: "Tablet", price: 700 }
}

function displayProductInfo(product: ProductRec): void {
    console.log(`Product ID: ${product.id}`);
    console.log(`Product Name: ${product.name}`);
    console.log(`Product Price: $${product.price}`);
}

Object.values(productsList).forEach(product => {
    displayProductInfo(product);
});



enum ColorsRec {
    RED = "red",
    GREEN = "green",
    BLUE = "blue"
}

type ColorFlags = Record<ColorsRec, boolean>

const colorFlags: ColorFlags = {
    [ColorsRec.RED]: true,
    [ColorsRec.GREEN]: false,
    [ColorsRec.BLUE]: true
}



type EventListeners = Record<string, () => void>

const eventListeners: EventListeners = {
    click: () => {
        console.log("Button clicked");
    },
    hover: () => {
        console.log("Mouse hovered");
    }
}



type ProductDetails = Record<number, {name: string, price: number}>

const productsDet: ProductDetails = {
    1: {name: "Laptop", price: 1000},
    2: {name: "Phone", price: 400}
}