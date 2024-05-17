"use strict";
var user = {
    name: "Alice",
    age: 30
};
var add = function (a, b) { return a + b; };
var resultF = add(5, 3); // Результат: 8
var userId = 123;
var postId = "abc";
var numberF = [1, 2, 3, 4, 5];
var line = {
    start: { x: 0, y: 0 },
    end: { x: 10, y: 10 }
};
var blog = {
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
};
