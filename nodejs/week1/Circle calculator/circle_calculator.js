class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return this.radius * 2;
    };

    getCircumference() {
        return this.radius * 2 * Math.PI;
    };

    getArea() {
        return this.radius * this.radius * Math.PI;
    };
}

const circleOne = new Circle(10);
console.log(`circleOne diameter is ${circleOne.getDiameter()}`);
console.log(`circleOne circumference is ${circleOne.getCircumference()}`);
console.log(`circleOne area is ${circleOne.getArea()}`);

const circleTwo = new Circle(7);
console.log(`circleTwo diameter is ${circleTwo.getDiameter()}`);
console.log(`circleTwo circumference is ${circleTwo.getCircumference()}`);
console.log(`circleTwo area is ${circleTwo.getArea()}`);

// Results from node
// $ node ./circle_calculator
// circleOne diameter is 20
// circleOne circumference is 62.83185307179586
// circleOne area is 314.1592653589793
// circleTwo diameter is 14
// circleTwo circumference is 43.982297150257104
// circleTwo area is 153.93804002589985