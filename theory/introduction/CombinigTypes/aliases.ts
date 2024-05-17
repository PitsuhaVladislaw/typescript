type PersonF = {
    name: string;
    age: number;
};

let user: PersonF = {
    name: "Alice",
    age: 30
};


type AddFunction = (a: number, b: number) => number;

let add: AddFunction = (a, b) => a + b;
let resultF = add(5, 3); // Результат: 8


type ID = string | number;

let userId: ID = 123;
let postId: ID = "abc";


type NumbersArray = number[];

let numberF: NumbersArray = [1, 2, 3, 4, 5];


type PointF = {
    x: number;
    y: number;
};

type Line = {
    start: Point;
    end: Point;
};

let line: Line = {
    start: { x: 0, y: 0 },
    end: { x: 10, y: 10 }
};



type UserF = {
    id: number;
    name: string;
    email: string;
}

type Post = {
    id: number;
    title: string;
    content: string;
}

type CommentF = {
    id: number;
    postId: number;
    userId: number;
    text: string;
}

type BlogData = {
    users: UserF[];
    posts: Post[];
    comments: CommentF[];
}

let blog: BlogData = {
    users: [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" }
    ],
    posts: [
        { id: 1, title: "First Post", content: "Hello, World!" },
        { id: 2, title: "Second Post", content: "Another day, another post." }
    ],
    comments: [
        { id: 1, postId: 1, userId: 1, text: "Great post!" },
        { id: 2, postId: 1, userId: 2, text: "Nice article." }
    ]
}