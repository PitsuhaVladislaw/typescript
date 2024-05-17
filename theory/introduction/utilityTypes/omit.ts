interface PersonO {
    name: string;
    age: number;
    city: string;
}

type PersonDetails = Omit<PersonO, 'city'>;

const personDetailts: PersonDetails = {
    name: 'John',
    age: 23
}

console.log(personDetailts);



type ProductO = {
    id: number;
    name: string;
    price: number;
    category: string;
}

type ProductSummary = Omit<ProductO, 'category'>;

const productSummary: ProductSummary = {
    id: 1,
    name: 'Book',
    price: 230
}

console.log(productSummary);



type UserO = {
    id: number;
    name: string;
    email: string;
}


function displayuserDetails(userF: Omit<User, 'email'>): void {
    console.log(`User ID: ${userF.id}`);
    console.log(`User Name: ${userF.name}`);
}

const userF: UserO = {
    id: 1,
    name: 'John',
    email: 'john2example.com'
}

//displayuserDetails(userF);



interface TaskOP {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

type TaskPreview = Omit<TaskOP, 'description'>;

function displayTaskPreview(task: TaskPreview): void {
    console.log(`Task ID: ${task.id}`);
    console.log(`Task Title: ${task.title}`);
    console.log(`Task Completed: ${task.completed ? 'Yes' : 'No'}`);
}

const task: TaskOP = {
    id: 1,
    title: 'Finish project',
    description: 'Complete all tasks and submit the project',
    completed: false
};

const taskPreview: TaskPreview = {
    id: task.id,
    title: task.title,
    completed: task.completed
};

displayTaskPreview(taskPreview);