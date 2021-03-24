const canvas = document.getElementById("circleCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    draw(c) {
        const ctx = c.getContext("2d");
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(
            this.x,
            this.y,
            this.r,
            this.startAngle,
            this.endAngle,
            2 * Math.PI
        );
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.stroke();
    }
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createRandomCircle(x, y) {
    const r = getRandomNumber(5, 100);
    const color = getRandomColor();
    return new Circle(x, y, r, 0, 2 * Math.PI, color);
}

function Interval() {
    setInterval(() => {
        const x = getRandomNumber(50, canvas.width);
        const y = getRandomNumber(50, canvas.height);
        const newCircle = createRandomCircle(x, y);
        newCircle.draw(canvas);
    }, 100);
}

//Interval();

document.addEventListener("mousemove", e => {
    console.log(e.clientX, e.clientY);
    createRandomCircle(e.clientX, e.clientY).draw(circleCanvas);
});
