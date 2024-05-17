declare module 'library' {
    interface Book {
        title: string;
        author: string;
    }
}


declare module 'data' {
    interface User {
        id: number;
        name: string;
        title: string;
    }
}


declare module 'externalLibrary' {
    function calculateSum(a: number, b: number): number;
}


declare module 'thirdPartyLibrary' {
    class Product {
        constructor(name: string, price: number);
        getInfo(): string;
    }
}


declare module 'api' {
    interface Post {
        id: number;
        title: string;
        body: string;
    }

    function fetchPosts(): Promise<Post[]>;
}


declare module 'constants' {
    export const PI: number;
    export const GRAVITY: number;
}


/* 

/import { fetchPosts } from 'api';
/import { User } from 'types';

fetchPosts()
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => {
        console.error(error);
    });

let user: User = { name: 'Alice', age: 30 };
console.log(user);

*/