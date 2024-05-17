let x: undefined;
console.log(x); // undefined


function doSomething(): undefined {
    console.log("Doing something");
}
console.log(doSomething()); // undefined


let y: undefined = undefined;
console.log(y); // undefined


let z: number | undefined;

if (z === undefined) {
    console.log("Variable z is undefined");
} else {
    console.log("Variable z has a value");
}

/*
function getUser(): User | undefined {
    /// Логика получения пользователя
    if (userExists) {
        return user;
    } else {
        return undefined;
    }
}
*/

function greetD(name?: string): void {
    if (name === undefined) {
        console.log("Hello!");
    } else {
        console.log("Hello, " + name + "!");
    }
}

greetD(); // Hello!
greetD("John"); // Hello, John!


interface User {
    id: number;
    name: string;
    email: string;
}

class UserManagers {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    getUserById(id: number): User | undefined {
        return this.users.find((user) => user.id === id);
    }
}

const userManagers = new UserManager();
//userManager.addUser({ id: 1, name: "John", email: "john@example.com" });
//userManager.addUser({ id: 2, name: "Alice", email: "alice@example.com" });
/*
///const user = userManager.getUserById(1);
if (user === undefined) {
    console.log("User not found");
} else {
    console.log("User found:", user);
}
*/