type AwaitedPromiseString = Awaited<Promise<string>>
type AwaitedPromiseNumber = Awaited<Promise<number>>


type AwaitedNumber = Awaited<number>


type AwaitedWithDefault = Awaited<string>;

/*
async function fetchData(): Promise<{ name: string }> {
    return { name: "John" };
}

type AwaitedData = Awaited<typeof fetchData()>;


type AwaitedResolve = Awaited<Promise.resolve("hello") >


async function asyncOperation(): Promise<number> {
    return 42;
}

type AwaitedAsyncOperation = Awaited<typeof asyncOperation() >
*/


type AwaitedD<T, U = T> = T extends Promise<infer R> ? R : U;

async function processData<T>(data: Promise<T>): Promise<Awaited<T>> {
    return await data
}

const resultD1: number = await processData(Promise.resolve(42));
const resultD2: string = await processData(Promise.resolve("hello"));
const resultD3: boolean = await processData(true);