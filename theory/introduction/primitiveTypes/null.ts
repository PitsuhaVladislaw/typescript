interface User {
    id: number;
    name: string;
    email: string;
}

class UserManagerd {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    getUserByEmail(email: string): User | null {
        const user = this.users.find((user) => user.email === email);
        return user ? user : null;
    }
}

const userManagerd = new UserManager();

const userPer = userManager.getUserByEmail("john@example.com");
if (userPer !== null) {
    //console.log("User found:", user);
} else {
    console.log("User not found");
}