type Greeting = `Hello, ${string}!`;
let message1: Greeting = "Hello, World!";

console.log(message1);


type Concatenated = `${'Hello'} ${'World'}`;
let combined: Concatenated = "Hello World";

console.log(combined);



type ColorTL = 'red' | 'blue';
type CarColorTL = `${ColorTL} car`;

let colorTL: CarColorTL = 'red car';
console.log(colorTL);



type UserEvent = `click:${string}`;

let eventUser: UserEvent = 'click:button';
console.log(eventUser);



type WelcomeMessage<T extends string> = `Welcome, ${T}`;

let welcome: WelcomeMessage<'John'> = 'Welcome, John';
console.log(welcome);



type EventCategory = 'click' | 'hover';
type ElementId = 'button' | 'link';

type EventListenerDD<E extends EventCategory, ID extends ElementId> = `${E}:${ID}`;

function handleEvent<E extends EventCategory, ID extends ElementId>(event: EventListenerDD<E, ID>) {
    console.log(`Handling event ${event}`)
}

handleEvent<'click', 'button'>('click:button');