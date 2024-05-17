interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

class UserManager {
    getUserByEmail(arg0: string) {
        throw new Error("Method not implemented.");
    }
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    findUserByEmail(email: string): User | undefined {
        return this.users.find(
            user => {
                user.email === email
            }
        )
    }

    getAverageAge(): number {
        const totalAge = this.users.reduce((sum, user) => sum + user.age, 0);
        return totalAge / this.users.length;
    }
}

const userManager = new UserManager();

//userManager.addUser({ id: 1, name: "John", email: "john@example.com", age: 25 });
//userManager.addUser({ id: 2, name: "Alice", email: "alice@example.com", age: 30 });
//userManager.addUser({ id: 3, name: "Bob", email: "bob@example.com", age: 35 });

const foundUser = userManager.findUserByEmail("alice@example.com");

if (foundUser) {
    console.log("The User is found");
    console.log(foundUser)
} else {
    console.log("The User is not found");
    console.log(foundUser)
}

const averageAge = userManager.getAverageAge();
console.log(averageAge);