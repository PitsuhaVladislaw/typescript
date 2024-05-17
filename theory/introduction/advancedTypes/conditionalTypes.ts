type CheckType<T> = T extends string ? "String Type" : T extends number ? "Number Type" : "Other Type";

const resultCK1: CheckType<string> = "String Type";
const resultCK2: CheckType<number> = "Number Type";
const resultCK3: CheckType<boolean> = "Other Type";

console.log(resultCK1);
console.log(resultCK2);
console.log(resultCK3);



type ExtractProperty<T> = T extends {prop: infer P} ? P : never;
const propValue: ExtractProperty<{prop: "value"}> = "value"

console.log(propValue);



type CheckArray<T> = T extends Array<any> ? "Array Type" : "Not an Array Type";
const arrayResult1: CheckArray<number[]> = "Array Type";
const arrayResult2: CheckArray<string> = "Not an Array Type";

console.log(arrayResult1);
console.log(arrayResult2);



type TransformType<T> = T extends {a: infer A; b: infer B} ? {a: A; b: B} : never;
const transformType: TransformType<{a: string, b: number}> = {a: 'hello', b: 123}
const transformType2: TransformType<{ a: string, b: string }> = { a: 'hello', b: '123' }

console.log(transformType);
console.log(transformType2);



type Mergetypes<T, U> = T extends U ? U : T;
type MergeTypes1 = Mergetypes<string | number, string>
type MergeTypes2 = Mergetypes<string | number, boolean>

//console.log(MergeTypes1);
//console.log(MergeTypes2);