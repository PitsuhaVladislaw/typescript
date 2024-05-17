type NullableString = string | number | null;
type NonNullableString = NonNullable<NullableString>

const str1: NonNullableString = "hello";
//const str2: NonNullableString = null;
const str3: NonNullableString = 12;



type NullableBoolean = boolean | null | undefined;
type NonNullableBoolean = NonNullable<NullableBoolean>;

const bool1: NonNullableBoolean = true;
//const bool2: NonNullableBoolean = null;



type NullableArray = number[] | null | undefined;
type NonNullableArray = NonNullable<NullableArray>;

//const arr1: NonNullableArray = [1, 2, 3];
//const arr2: NonNullableArray = null;



type UserNon = {
    id: number;
    name: string;
    email: string | null;
}

type NonNullAbleUser = {
    id: number;
    name: string;
    email: NonNullable<UserNon['email']>;
}

const user1: NonNullAbleUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};

/*
const user2: NonNullableUser = {
    id: 2,
    name: "Bob",
    email: null;
};
*/