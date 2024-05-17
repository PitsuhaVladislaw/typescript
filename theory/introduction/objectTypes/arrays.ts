let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Alice", "Bob"];


let numbersss: number[] = [1, 2, 3, 4, 5];
console.log(numbersss[0]); // Выводит 1


let numberss: number[] = [1, 2, 3, 4, 5];
console.log(numberss.length); // Выводит 5


let numbers4: number[] = [1, 2, 3, 4, 5];
numbers4.push(6); // Добавляет элемент в конец массива
numbers4.pop(); // Удаляет последний элемент массива
numbers4.splice(2, 1); // Удаляет один элемент по индексу 2
let slicedArray: number[] = numbers4.slice(0, 3); // Создает новый массив из первых трех элементов


let numbers1: number[] = [1, 2, 3, 4, 5];
numbers1.push(6); // Добавляет элемент в конец массива
numbers1.pop(); // Удаляет последний элемент массива
console.log(numbers1.length); // Выводит 5


interface USer {
    id: number;
    name: string;
    email: string;
}

class UsersManager {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
    }

    findUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }

    getUsersByAge(age: number): User[] {
        return this.users.filter(user => user.age === age);
    }
}

const usersManager = new UsersManager();
/*
usersManager.addUser({ id: 1, name: "John", email: "john@example.com" });
usersManager.addUser({ id: 2, name: "Alice", email: "alice@example.com" });
usersManager.addUser({ id: 3, name: "Bob", email: "bob@example.com" });
*/
const foundsUser = usersManager.findUserByEmail("alice@example.com");
if (foundUser) {
    console.log("User found:", foundUser);
} else {
    console.log("User not found");
}

const usersWithAge25 = usersManager.getUsersByAge(25);
console.log("Users with age 25:", usersWithAge25);