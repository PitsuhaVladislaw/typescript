abstract class Figure {
    getArea(): void{
        console.log("Not Implemented");
    }
}

class Rectangle extends Figure {
    constructor(public width: number, public height: number) {
        super();
    }

    getArea(): void {
        let square = this.width * this.height;
        console.log("area: " + square);
    }
}

let someFigure: Figure = new Rectangle(293, 345);
someFigure.getArea();


abstract class Figure1 {
    abstract x: number;
    abstract y: number;
    abstract getArea() : void;
}

class Rectangle1 extends Figure1 {
    constructor(public x: number, public y: number, public width: number, public height: number) {
        super();
    }

    getArea(): void{
        let square = this.width * this.height;
        console.log("area =", square);
    }
}

let someFigure1: Rectangle1 = new Rectangle1(10, 10, 20, 20);
someFigure1.getArea();