/*
*/

function Generic<T>(args: T):T {
    return args
}

Generic<number>(1)
Generic<string>('text')

class Channel<G> {
    private name: G

    constructor(name: G) {
        this.name = name
    }

    getName():G {
        return this.name
    }
}

new Channel<string>('Max')
new Channel<number>(12344)


const entity = <G>(args: G):G => {
    return args
}


interface IPair<K, V> {
    key: K
    value: V 
}

const pair1: IPair<string, number> = {
    key: '1243',
    value: 2432
}

const pair2: IPair<number, number> = {
    key: 1243,
    value: 2432
}


type TypeLegnth = {
    length: number
}

function getNameLength<G extends TypeLegnth>(entity: G): number {
    return entity.length
}

getNameLength('fewlknfjdf')
getNameLength([0, 1, 2])

//*Book