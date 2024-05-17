class AnimalM {
    makeSound(): void {
        console.log("Animal is making a sound");
    }
}

class DogM extends AnimalM {
    makeSound(): void {
        console.log("Dog is barking");
    }
}

const dogM = new DogM();
dogM.makeSound();



class AnimalM2 {
    makeSound(): void {
        console.log("Animal is making a sound");
    }
}

class DogM2 extends AnimalM2 {
    makeSound(): void {
        super.makeSound();
        console.log("Dog is barking");
    }
}

const dogM2 = new DogM2();
dogM2.makeSound();


/*
class ShapeM {
    calculateArea(): void {
        console.log("Calculating area of shape");
    }
}

class CircleM extends ShapeM {
    calculateArea(raduis: number): void {
        const area = Math.PI * raduis * raduis;
        console.log(`Area of circle with raduis ${raduis} is ${area}`);
    }
}

const circle = new CircleM();
circle.calculateArea(5);
*/



class PersonM {
    introduce(): string {
        return "I am a person";
    }
}

class StudentM extends PersonM {
    introduce(): string {
        return "I am a student"
    }
}

const student = new StudentM();
console.log(student.introduce());



class AnimalML {
    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class DogML extends AnimalML {
    makeSound(): void {
        console.log("Dog barks");
    }
}

class CatML extends AnimalML {
    makeSound(): void {
        console.log("Cat meows");
    }
}

const dogML = new DogML();
const catML = new CatML();

dogML.makeSound();
catML.makeSound();