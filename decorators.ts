function LogClass(constructor: Function) {
    console.log(constructor.name)
}

function LogMethod(target: Object, key: string, descriptor: 
PropertyDescriptor) {

}

class Plane {
    private id: number

    constructor(id: number) {
        this.id = id
    }

    getId() {
        return this.id;
    }
}


//* Book